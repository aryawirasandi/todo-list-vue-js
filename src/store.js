import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos : []
  },
  mutations: {
    listTodos : (state, payload) => state.todos = payload
  },
  actions: {
    listTodos(data){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => data.commit('listTodos', json))
    }
  },
  getters:{
    listTodos : state => state.todos
  }
})
