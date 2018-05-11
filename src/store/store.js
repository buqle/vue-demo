import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//全局安装 vuex npm install vuex 进入项目安装依赖cnpm install vuex --save
export default new Vuex.Store({
  state: {todos:[], newTodo:'' },
  mutations: {
    GET_TODO(state, todo) { //接收state作为第一个参数
      state.newTodo = todo
     // console.log(todo)
    },
    ADD_TODO(state) {
      state.todos.push({
        body:state.newTodo, completed: false
      });
      //console.log(state.todos)
      },
    COMPLETE_TODO(state,todo){
      todo.completed = !todo.completed
    }
    ,
    EDIT_TODO(state, todo) {
      var todos = state.todos;
      todos.splice(todos.indexOf(todo), 1); //splice(添加删除项目位置,删除的数量)
      state.todos = todos;
      state.newTodo = todo.body;
      console.log(state.newTodo)
      },
    REMOVE_TODO(state, todo) {
      var todos=state.todos;
      todos.splice(todos.indexOf(todo),1)
    },
    CLEAR_TODO(state) {
      state.newTodo = ''
    }
    },

  actions: { //actions使用mutations的方法
    getTodo({ commit }, todo) {
      commit('GET_TODO', todo)
    },
    addTodo({ commit }) {
      commit('ADD_TODO')
    },
    editTodo({ commit }, todo) {
      commit('EDIT_TODO', todo)
    },
    removeTodo({ commit }, todo) {
      commit('REMOVE_TODO', todo)
    },
    completeTodo({ commit }, todo) {
      commit('COMPLETE_TODO', todo)
    },
    clearTodo({ commit }) {
      commit('CLEAR_TODO')
    }
    },

  getters:{
    newTodo:state=>state.newTodo,
    todos:state=>state.todos.filter((todo)=>{
      return !todo.completed
    }),
    completedTodos:state=>state.todos.filter((todo)=>{
      return todo.completed
    })
  }
})
