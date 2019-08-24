<template>
    <div>
      
    </div>
</template>

<script>
export default {
    name : "home",
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
