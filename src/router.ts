import Vue from 'vue'
import Router from 'vue-router'
import { MenuUtil } from './common/MenuUtil';

Vue.use(Router)
//
// 动态模块加载
let resolved = id => () => require(id);
// if (process.env == 'production') {
//   resolved= id => () => import('@/' + id + '.vue')
// } else {
//   resolved= id => require('@/' + id + '.vue')
// }

let router = [];
for (const item of MenuUtil.getAllMenuList()) {
  if (item.items && item.items.length > 0) {
    for (const item2 of item.items) {
      //let aa = import(item2.component);
      // console.log(item2.component);
      router.push({
        path: item2.href, component:resolved(item2.component)
      });
    }
  }
}

router.push(
  { path: '/admin/index', component: () => import('@/views/index/list.vue') },
);

const constantRouterMap = [
  {
    path: "/admin/login",
    component: () => import('./views/login/list.vue'),
  },
  {
    path: "/test_datagrid",
    component: () => import('./views/test_datagrid.vue'),
  },
  {
    path: "/test_form",
    component: () => import('./views/test_form.vue'),
  },
  {
    path: "/test_index",
    component: () => import('./views/test_index.vue'),
  },
  {
    path: "/",
    component: () => import('./views/index/layout.vue'),
    redirect: '/admin/login',
    children: 
    //router
    [
      { path: '/admin/ad/list', component: () => import('@/views/ad/list.vue') },
      { path: '/admin/ad/classlist', component: () => import('@/views/ad/classlist.vue') },
      { path: '/admin/admin/list', component: () => import('@/views/admin/list.vue') },
      { path: '/admin/admin/rolelist', component: () => import('@/views/admin/rolelist.vue') },
      { path: '/admin/article/list', component: () => import('@/views/article/list.vue') },
      { path: '/admin/article/commentlist', component: () => import('@/views/article/commentlist.vue') },
      { path: '/admin/article/classlist', component: () => import('@/views/article/classlist.vue') },
      { path: '/admin/article/topicclasslist', component: () => import('@/views/article/topicclasslist.vue') },
      { path: '/admin/article/collectionlist', component: () => import('@/views/article/collectionlist.vue') },
      { path: '/admin/blocker/list', component: () => import('@/views/blocker/list.vue') },
      { path: '/admin/cache/list', component: () => import('@/views/cache/list.vue') },
      { path: '/admin/config/edit', component: () => import('@/views/config/edit.vue') },
      { path: '/admin/diy/list', component: () => import('@/views/diy/list.vue') },
      { path: '/admin/diy/classlist', component: () => import('@/views/diy/classlist.vue') },
      { path: '/admin/ext/list', component: () => import('@/views/ext/list.vue') },
      { path: '/admin/file/list', component: () => import('@/views/file/list.vue') },
      { path: '/admin/friend/list', component: () => import('@/views/friend/list.vue') },
      { path: '/admin/friend/classlist', component: () => import('@/views/friend/classlist.vue') },
      { path: '/admin/guest/list', component: () => import('@/views/guest/list.vue') },
      { path: '/admin/index', component: () => import('@/views/index/list.vue') },
      { path: '/admin/keywords/list', component: () => import('@/views/keywords/list.vue') },
      { path: '/admin/menu/list', component: () => import('@/views/menu/list.vue') },
      { path: '/admin/plugin/list', component: () => import('@/views/plugin/list.vue') },
      { path: '/admin/template/list', component: () => import('@/views/template/list.vue') },
      { path: '/admin/user/list', component: () => import('@/views/user/list.vue') },
      { path: '/admin/user/rolelist', component: () => import('@/views/user/rolelist.vue') },
      { path: '/admin/wx/list', component: () => import('@/views/wx/list.vue') },
      { path: '/admin/logs/list', component: () => import('@/views/logs/list.vue') },
    ]
  }
];

let routes: any = constantRouterMap

let rr = new Router({
  routes
});

export default rr
