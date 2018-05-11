<template>
  <div id="get-todo">
    <input class="form-control" :value="newTodo" @change="getTodo" placeholder="you need" id="te">
    <button class="btn btn-primary" @click="addTodo">Todo</button>

  </div>

</template>

<script>
    export default {

        methods:{
          getTodo(e){
            this.$store.dispatch('getTodo',e.target.value)
          },
          addTodo(){
            if(document.getElementById("te").value==''){
              alert('请输入内容');
              return false
            }
            this.$store.dispatch('addTodo');
            this.$store.dispatch('clearTodo')
          }
        },
      computed:{
        newTodo(){
          return this.$store.getters.newTodo
        }
      }
    }


</script>

<style>

</style>
