<template>
    <form class="p-4 p-md-5 border rounded-3 bg-light">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="name"  placeholder="your name is ...">
        <label for="name">Name</label>
      </div>

      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="Password" placeholder="Password">
        <label for="Password">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
      <hr class="my-4">
      <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
    </form>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>

</style>
