import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('./views/layout.vue')
    },
    {
      path: '/datagrid',
      component: () => import('./views/datagrid.vue')
    },
    {
      path: '/form',
      component: () => import('./views/form.vue')
    }
  ]
})
