<template>
  <div>
    <div class="layui-card box-admin-header">
      <div class="layui-breadcrumb" lay-filter="breadcrumb" style="visibility: visible;">
        <a lay-href="/#/admin/index">主页</a><span lay-separator="">/</span>
        <a><cite>{{options.title}}</cite></a><span lay-separator="">/</span>
        <a><cite>列表</cite></a>
      </div>
    </div>
    <div class="box-form-query">
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
    <div class="box-form-query-single">
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
    <table class="layui-hide" id="test_data_grid" lay-filter="data_grid"></table>
    <!-- <div id="pager"></div> -->
    <script type="text/html" id="toolbarDemo">
      <div class="layui-btn-container">
				<button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button>
				<button class="layui-btn layui-btn-sm" lay-event="getCheckLength" @click="refresh">刷新</button>
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
import $ from "jquery";
import axios from "axios";

@Component({})
export default class boxDataGrid extends Vue {
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
      title: this.title ? this.title : "列表测试",
      pager: {
        size: 20
      }
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
        let laypage = layui.laypage;
        form.render();

        let height_1 =
          $(".box-admin-header").height() +
          $(".box-form-query").height() +
          $(".box-form-query-single").height();

        let height = "full-" + (Math.round(height_1) + 155);
        //渲染表格
        table.render({
          id: "data_grid",
          elem: "#test_data_grid",
          cellMinWidth: 80,
          cols: [this.options.cols],
          data: this.options.data,
          page: true,
          limit: this.options.pager.size,
          toolbar: "#toolbarDemo",
          height: height,
          url: "/static/json/user.json?a=1"
        });
        //监听表格排序
        table.on("sort(data_grid)", function(obj) {
          console.log(obj);
        });
        //监听分页数据
        //监听选中数据
        table.on('toolbar(data_grid)', function(obj){
          console.log(obj);
        });
        //分页
        // laypage.render({
        //   elem: "pager",
        //   count: 100,
        //   layout: ["count", "prev", "page", "next", "limit", "refresh", "skip"],
        //   jump: function(obj) {
        //     table.reload("data_grid", {});
        //   }
        // });
        //
      });
    });
  }

  public refresh() {
    this.options.pager.size = 50;
    console.log(this.options);
  }
  /**
   * 操作选项
   */
  public async option(data: any) {
    Object.assign(this.options, data);
  }
}
</script>
<style lang="less" scoped>
.box-admin-header {
  line-height: 50px;
  margin-bottom: 0;
  border-radius: 0;
}
.box-form-query {
  margin: 10px 0 0 0;
}
</style>

