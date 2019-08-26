<template>
   <div>
      <div v-for="(value, key) of todos" :key="key">
      <v-card
        class="mx-auto"
      >
        <v-card-title>{{value.title}}</v-card-title>
        <v-card-text>{{value.body}}</v-card-text>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn depressed color="primary">Update</v-btn>
          <v-btn depressed color="error">Delete</v-btn>
        </v-card-actions>
      </v-card>
      </div>
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
