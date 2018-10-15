import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('./views/test_layout.vue')
    },
    {
      path: '/test_datagrid',
      component: () => import('./views/test_datagrid.vue')
    },
    {
      path: '/test_form',
      component: () => import('./views/test_form.vue')
    }
  ]
})
