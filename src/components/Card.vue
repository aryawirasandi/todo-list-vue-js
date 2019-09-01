<template>
    <div>
      <v-card
        class="mx-auto"
      >
        <v-card-title>{{title}}</v-card-title>
        <v-card-text>{{body}}</v-card-text>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn depressed color="primary">Update</v-btn>
          <v-btn depressed color="error">Delete</v-btn>
        </v-card-actions>
      </v-card>
      </div>
</template>
<style>

</style>
<script>
export default {
    props:{
        title : String,
        body : String
    }
}
</script>