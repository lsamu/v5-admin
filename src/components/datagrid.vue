<template>
	<div>
		<div class="x-nav">
			<span class="layui-breadcrumb" style="visibility: visible;">
				<a href="">首页</a>
				<span lay-separator="">/</span>
				<a href="">演示</a>
				<span lay-separator="">/</span>
				<a>
					<cite>导航元素</cite>
				</a>
			</span>
		</div>
		<div class="layui-form-query">
			<form class="layui-form" id="query_form">
				<div class="layui-form-item">
					<div class="layui-inline">
						<label class="layui-form-mid">功能号：</label>
						<div class="layui-input-inline" style="width: 100px;">
							<input type="text" name="funcNo" autocomplete="off" class="layui-input" />
						</div>
						</div>
						<div class="layui-inline">
							<label class="layui-form-mid">名称：</label>
							<div class="layui-input-inline" style="width: 150px;">
								<input type="text" name="funcName" autocomplete="off" class="layui-input" />
						</div>
							</div>
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
								<div class="layui-input-inline">
									<button class="layui-btn" type="button" function="query">
										<i class="layui-icon">&#xe615;</i>查询</button>
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
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  columns: any = [];
  async mounted() {
    await this.$nextTick(() => {
      layui.use(["table", "form"], () => {
        let form = layui.form;
        let table = layui.table;

        form.render();
        let data = [];
        for (let index = 0; index < 1000000; index++) {
          data.push({
            id: index.toString(),
            username: "贤心" + index,
            email: "xianxin@layui.com",
            sex: "男",
            city: "浙江杭州",
            sign: "人生恰似一场修行",
            experience: "106",
            ip: "192.168.0.8",
            logins: "106",
            joinTime: "2016-10-14"
          });
        }
        table.render({
          elem: "#test",
          //url: "https://www.layui.com/demo/table/user/",
          cellMinWidth: 80, //全局定义常规单元格的最小宽度，layui 2.2.1 新增
          cols: [
            [
              { type: "radio", fixed: "left" },
              { type: "checkbox", fixed: "left" },
              {
                field: "id",
                width: 80,
                title: "ID",
                sort: true,
                fixed: "left"
              },
              { field: "username", width: 80, title: "用户名" },
              { field: "sex", width: 80, title: "性别", sort: true },
              { field: "city", width: 80, title: "城市" },
              { field: "sign", title: "签名", width: "30%", minWidth: 100 }, //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
              {
                field: "experience",
                title: "积分",
                sort: true,
                totalRow: true
              },
              { field: "score", title: "评分", sort: true },
              { field: "classify", title: "职业" },
              { field: "wealth", width: 137, title: "财富", sort: true },
              {
                field: "id",
                title: "编辑",
                width: 160,
                templet: "#barDemo",
                unresize: true,
                fixed: "right"
              }
            ]
          ],
          data,
          page: true,
          toolbar: "#toolbarDemo",
          totalRow: true,
          height: "full-100"
        });
      });
    });
  }

 /**
     * 配置操作
     */
    public option(data: {
        dataSource:[],
        columns: [],
        toolbar:[],
        searchForm:{}
    }) {

        this.columns = data.columns;
	}
	
	 /**
     * 刷新
     */
    public refush() {

    }

    /**
     * 获取工具条实例
     */
    public getToolBar(){

    }

    /**
     * 获取搜索表单
     */
    public getSearchForm(){

    }
}
</script>

