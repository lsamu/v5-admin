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
import datagridController from "./datagridController";
export default datagridController;
</script>
<style>
.layui-form-query {
  padding: 10px 15px 0px 15px;
}
.x-nav {
    padding: 0 20px;
    position: relative;
    z-index: 99;
    border-bottom: 1px solid #e5e5e5;
    line-height: 39px;
    height: 39px;
    overflow: hidden;
}
</style>


