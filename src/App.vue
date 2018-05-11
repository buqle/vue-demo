<template>
  <div id="app">
    <completed-todos></completed-todos>
    <current-todos></current-todos>
    <get-todo></get-todo>
    <Computeds></Computeds>
    <public></public>
    <ul>
      <router-link to="/home">home</router-link>
    </ul>
    <router-view></router-view>
    <!--<Vw></Vw>-->
  </div>
</template>

<script>
import GetTodo from './components/GetTodo';
import CurrentTodos from './components/CurrentTodos';
import CompletedTodos from './components/CompletedTodos';
import Computeds from './components/Computeds';
import Public from './components/Public';
import Vw from './components/Vw';

export default {
  components:{
    CurrentTodos,CompletedTodos,GetTodo,Vw,Computeds,Public

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
