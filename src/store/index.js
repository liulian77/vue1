// 引入vue 和 vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 这里需要use一下,固定写法,记住即可
Vue.use(Vuex)

// 直接导出 一个 Store 的实例
export default new Vuex.Store({
  // 类似 vue 的 data
  state: {
      publicData:"",
      drugsBox:`{
      "TaskID": "药品说明书查询",
      "授权ID": "6BECBCC2-473F-4071-A20E-423E247B2266",
      "药品名称": "木瓜"
  }`,
      dataJson:""
  },
  // 类似 vue 里的 mothods(同步方法)
  mutations: {
    setPublicData(state, value){
      state.publicData = value.publicData;
    },
    setDataJson(state, value){
      console.log(value.dataJson)
      state.dataJson = value.dataJson;
    }

  }
})
