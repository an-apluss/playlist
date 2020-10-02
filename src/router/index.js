import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ProductOne from '@/components/ProductOne'
import ProductTwo from '@/components/ProductTwo'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/one',
      name: 'ProductOne',
      component: ProductOne
    },
    {
      path: '/two',
      name: 'ProductTwo',
      component: ProductTwo
    },
    {
      path: '*',
      name: 'NotFoundComponent',
      component: NotFoundComponent
    }
  ]
})
