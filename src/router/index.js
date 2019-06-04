import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/components/common/Index'], resolve),
      children:[
        {
          path: '/reviewInterface',
          name: '用药审查接口',
          component: resolve => require(['@/components/page/reviewinter/ReviewInterface.vue'], resolve)
        },
        {
          path: '/interfacCall',
          name: '接口调用手册',
          component: resolve => require(['@/components/page/interfacCall/InterfacCall'], resolve)
        },
        {
          path: '/queryInterface',
          name: '接口调用手册',
          component: resolve => require(['@/components/page/QueryInterface'], resolve)
        }
      ]
    }
  ]
})
