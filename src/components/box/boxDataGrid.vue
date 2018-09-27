<template>
  <div>
    <table class="layui-hide" id="test"></table>
    <script type="text/html" id="toolbarDemo">
      <div class="layui-btn-container">
				<button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button>
				<button class="layui-btn layui-btn-sm" lay-event="getCheckLength">刷新</button>
				<button class="layui-btn layui-btn-sm" lay-event="isAll">批量设置</button>
			</div>
		</script>
    <script type="text/html" id="barDemo">
      <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
			<a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
		</script>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class MyDataGrid extends Vue {
  private options: any = null;

  /**
   * 挂载完毕执行
   */
  mounted() {
    this.options = {
      cols: [],
      data: []
    };
  }

  /**
   * 数据变化
   */
  @Watch("options")
  async watchDataGrid() {
    await this.$nextTick(() => {
      layui.use(["table", "form"], () => {
        let form = layui.form;
        let table = layui.table;
        form.render();

        table.render({
          elem: "#test",
          cellMinWidth: 80,
          cols: [this.options.cols],
          data: this.options.data,
          page: true,
          toolbar: "#toolbarDemo",
          totalRow: true,
          height: "full-100"
        });
      });
    });
  }

  /**
   * 操作选项
   */
  public async option(data: any) {
    Object.assign(this.options, data);
  }
  
}
</script>
