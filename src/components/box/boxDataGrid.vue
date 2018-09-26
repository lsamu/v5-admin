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
import { Vue, Watch } from "vue-property-decorator";
export default class MyDataGrid extends Vue {
  cols = [];
  data = [];
  async mounted() {
      await this.$nextTick(() => {
      layui.use(["table", "form"], () => {
        let table = layui.table;

        table.render({
          elem: "#test",
          cellMinWidth: 80,
          cols: [[
      {field:'id', width:80, title: 'ID', sort: true}
      ,{field:'username', width:80, title: '用户名'}
      ,{field:'sex', width:80, title: '性别', sort: true}
      ,{field:'city', width:80, title: '城市'}
      ,{field:'sign', title: '签名', minWidth: 150}
      ,{field:'experience', width:80, title: '积分', sort: true}
      ,{field:'score', width:80, title: '评分', sort: true}
      ,{field:'classify', width:80, title: '职业'}
      ,{field:'wealth', width:135, title: '财富', sort: true}
    ]],
          data: this.data,
          page: true,
          toolbar: "#toolbarDemo",
          totalRow: true,
          height: "full-100"
        });
      });
    });
  }

  //@Watch("cols")
  @Watch("data")
  async watchDataGrid() {
    console.log("1231");
    await this.$nextTick(() => {
      layui.use(["table", "form"], () => {
        let form = layui.form;
        let table = layui.table;
        form.render();

        table.render({
          elem: "#test",
          cellMinWidth: 80,
          cols: [[
      {field:'id', width:80, title: 'ID', sort: true}
      ,{field:'username', width:80, title: '用户名'}
      ,{field:'sex', width:80, title: '性别', sort: true}
      ,{field:'city', width:80, title: '城市'}
      ,{field:'sign', title: '签名', minWidth: 150}
      ,{field:'experience', width:80, title: '积分', sort: true}
      ,{field:'score', width:80, title: '评分', sort: true}
      ,{field:'classify', width:80, title: '职业'}
      ,{field:'wealth', width:135, title: '财富', sort: true}
    ]],
          data: this.data,
          page: true,
          toolbar: "#toolbarDemo",
          totalRow: true,
          height: "full-100"
        });
      });
    });
  }

  public option(data: any) {
    this.cols = data.cols;
    this.data = data.data;
    console.log(this.cols);
    console.log(this.data);
  }
}
</script>
