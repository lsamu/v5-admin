<template>
  <div>
    <div class="x-nav">
      <span class="layui-breadcrumb" style="visibility: visible;">
        <a href="/#/admin/index">首页</a>
        <span lay-separator="">/</span>
        <a>
          <cite>{{options.title}}</cite>
        </a>
        <span lay-separator="">/</span>
        <a>
          <cite>列表</cite>
        </a>
      </span>
    </div>
    <div class="layui-form-query">
      <form class="layui-form" id="query_form">
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-mid">类型：</label>
            <div class="layui-input-inline" style="width: 150px;">
              <select name="funcType" lay-verify="required">
                <option value="">--请选择--</option>
                <option value="c">功能号实现类</option>
                <option value="s">service实现类</option>
                <option value="m">mapper实现类</option>
              </select>
            </div>
          </div>
          <div class="layui-inline">
            <label class="layui-form-mid">名称：</label>
            <div class="layui-input-inline" style="width: 150px;">
              <input type="text" name="funcName" autocomplete="off" class="layui-input" />
            </div>
          </div>

          <div class="layui-inline">
            <div class="layui-input-inline">
              <button class="layui-btn" type="button" function="query">
                <i class="layui-icon">&#xe615;</i>搜索</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="layui-form-query-single">
      <form class="layui-form">
        <div class="layui-form-item">
          <label class="layui-form-mid">筛选：</label>
          <div class="layui-input-inline" style="width: 150px;">
            <select name="funcType" lay-verify="required">
              <option value="c">编号</option>
              <option value="s">标题</option>
            </select>
          </div>
          <div class="layui-input-inline" style="width: 150px;">
            <select name="funcType" lay-verify="required">
              <option value="">包含</option>
              <option value="c">等于</option>
            </select>
          </div>
          <div class="layui-input-inline" style="width: 150px;">
            <input type="text" name="funcName" autocomplete="off" class="layui-input" />
          </div>
          <div class="layui-inline">
            <div class="layui-input-inline">
              <button class="layui-btn" type="button" function="query">
                <i class="layui-icon">&#xe615;</i>过滤</button>
            </div>
          </div>
        </div>
      </form>
    </div>
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
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class MyDataGrid extends Vue {
  @Prop()
  title!: string;

  private options: any = {};
  /**
   * 挂载完毕执行
   */
  mounted() {
    this.options = {
      cols: [],
      data: [],
      title: this.title ? this.title : "列表测试"
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
