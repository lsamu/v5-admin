<template>
  <div>
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <div class="layui-logo">layui 后台布局</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
        <ul class="layui-nav layui-layout-left">
          <li class="layui-nav-item"><a href="#">内容管理</a></li>
          <li class="layui-nav-item"><a href="#">用户中心</a></li>
          <li class="layui-nav-item"><a href="#">模板管理</a></li>
          <li class="layui-nav-item"><a href="#">系统设置</a></li>
        </ul>
        <ul class="layui-nav layui-layout-right">
          <li class="layui-nav-item">
            <a href="javascript:;">
              <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
              贤心
            </a>
            <dl class="layui-nav-child">
              <dd><a href="">基本资料</a></dd>
              <dd><a href="">安全设置</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item"><a href="">退了</a></li>
        </ul>
      </div>

      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
          <ul class="layui-nav layui-nav-tree" lay-filter="test">
            <!-- <li class="layui-nav-item layui-nav-itemed">
              <a class="" href="javascript:;">所有商品</a>
              <dl class="layui-nav-child">
                <dd><a href="javascript:;">列表一</a></dd>
                <dd><a href="javascript:;">列表二</a></dd>
                <dd><a href="javascript:;">列表三</a></dd>
                <dd><a href="">超链接</a></dd>
              </dl>
            </li> -->
            <li class="layui-nav-item layui-nav-itemed" v-for="(item, index) in items" :key="item.id">
              <a href="javascript:void(0)">{{item.name}}</a>
              <dl class="layui-nav-child" v-if="item.items">
                <dd v-for="(item_child, index_child) in item.items"  :key="item_child.id"><a :href='"/#"+item_child.href'>{{item_child.name}}</a></dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>

      <div class="layui-body">
        <!-- 内容主体区域 -->
        <div style="padding:0 15px 0 15px;">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>

      <div class="layui-footer">
        <!-- 底部固定区域 -->
        © layui.com - 底部固定区域
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MenuUtil } from '@/common/MenuUtil';

@Component({
  components: {}
})
export default class Home extends Vue {
  public items: any[] = [];

  public mounted() {
    layui.use("element", function() {
      var element = layui.element;
    });

    this.items = MenuUtil.getAllMenuList();
  }
  public option() {}
}
</script>

