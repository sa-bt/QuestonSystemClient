<template>
  <v-app-bar
    color="deep-purple"
    dark
  >
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>
  </v-app-bar>



</template>

<script>
    export default {
        name: "Navbar",
        methods:{
            logout(){
                this.$auth.logout();
            }
        }
    }
</script>

<style scoped>

</style>
