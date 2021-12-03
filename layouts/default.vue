<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="8" md="4">
        <Navbar/>
        <Nuxt/>
      </v-col>
    </v-row>
  </v-container>
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
