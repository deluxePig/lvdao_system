import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isload:0, // 是否显示loading
    userinfo:{ // 用户信息

    },
    sysCityList:[]//系统拥有的城市
  },
  mutations: {

  },
  actions: {

  }
})
