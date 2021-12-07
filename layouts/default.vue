<template>
  <v-app>
    <v-container fluid>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="12" sm="8" md="4">
          <Navbar/>
          <Nuxt/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
    import Navbar from "../components/Navbar";

    export default {
        name: "default",
        components: {Navbar}
    }
</script>

<style scoped>

</style>
