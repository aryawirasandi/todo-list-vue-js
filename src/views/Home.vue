<template>
   <div>
      <card v-for="todo in todos" 
      :key="todo.id"
      :title="todo.title"
      :body="todo.body"
      />
   </div>
</template>

<script>
import Card from '@/components/Card';
export default {
    name : "home",
    components:{
      Card
    },
    computed:{
      todos(){
        return this.$store.getters.listTodos  
      }
    },
    created(){
      this.$store.dispatch('listTodos')
    }
};
</script>
