<template>
  <div id="completeds" class="container">
    <h3 v-if="completed2.length>0">{{completed2.length}}</h3>
    <div class="list-group" v-for="todo in completed2">
      <li>
        {{todo.body}}
        <button @click="remove(todo)" class="btn btn-default btn-sm" type="button">
          <span class="glyphicon glyphicon-remove-circle"></span> REMOVE
        </button>
      </li>
    </div>
  </div>
</template>

<script>
    export default {
        name: "completed-todos",
        methods:{
          remove(todo){
            this.$store.dispatch('removeTodo',todo)
          }

        },
      computed:{
        completed2(){
          return this.$store.getters.completedTodos
        }
      }
    }

</script>

<style scoped>

</style>
