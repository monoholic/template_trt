<template>
    <v-navigation-drawer>
      <v-list-item title="My Application" subtitle=""></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="List Item 1" @click="pageMove('/')"></v-list-item>
      <v-list-item link title="List Item 2" @click="pageMove('/list')"></v-list-item>
    </v-navigation-drawer>
</template>

<script>

  export default {
    methods:{
      pageMove(key){
        this.$router.push(key);
      }
    }
  }
</script>
