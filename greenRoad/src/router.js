import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue' //首页
import everyday from './views/everyday/everyday.vue' //日常值守
import operatStatistic from './views/operat_statistic/operat_statistic.vue' //运营统计
import punishesCases from './views/punishesCases/punishesCases.vue' //违规处罚
import deviceManage from './views/deviceManage/deviceManage.vue' //设备管理
import grade from './views/grade/grade.vue' //评分评价
import login from './views/login/login.vue' //登录页


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        { path: 'everyday', name: 'everyday', component: everyday },
        { path: 'operatStatistic', name: 'operatStatistic', component: operatStatistic },
        { path: 'punishesCases', name: 'punishesCases', component: punishesCases },
        { path: 'deviceManage', name: 'deviceManage', component: deviceManage },
        { path: 'grade', name: 'grade', component: grade },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }

  ]
})
