import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//

const constantRouterMap=[
  {
    path:"/admin/login",
    component: () => import('./views/login/list.vue'),
  },
  {
    path:"/test_datagrid",
    component: () => import('./views/test_datagrid.vue'),
  },
  {
    path:"/test_form",
    component: () => import('./views/test_form.vue'),
  },
  {
    path:"/",
    component: () => import('./views/index/layout.vue'),
    redirect: '/admin/login',
    children:[
      { path: '/admin/ad', component: () => import('./views/ad/list.vue') },
      { path: '/admin/admin', component: () => import('./views/admin/list.vue') },
      { path: '/admin/article', component: () => import('./views/article/list.vue') },
      { path: '/admin/blocker', component: () => import('./views/blocker/list.vue') },
      { path: '/admin/cache', component: () => import('./views/cache/list.vue') },
      { path: '/admin/config', component: () => import('./views/config/list.vue') },
      { path: '/admin/diy', component: () => import('./views/diy/list.vue') },
      { path: '/admin/ext', component: () => import('./views/ext/list.vue') },
      { path: '/admin/file', component: () => import('./views/file/list.vue') },
      { path: '/admin/friend', component: () => import('./views/friend/list.vue') },
      { path: '/admin/guest', component: () => import('./views/guest/list.vue') },
      { path: '/admin/index', component: () => import('./views/index/list.vue') },
      { path: '/admin/keywords', component: () => import('./views/keywords/list.vue') },
      { path: '/admin/menu', component: () => import('./views/menu/list.vue') },
      { path: '/admin/plugin', component: () => import('./views/plugin/list.vue') },
      { path: '/admin/template', component: () => import('./views/template/list.vue') },
      { path: '/admin/user', component: () => import('./views/user/list.vue') },
      { path: '/admin/wx', component: () => import('./views/ad/list.vue') },
    ]
  }
];

let routes: any = constantRouterMap

let rr = new Router({
  routes
});

export default rr
