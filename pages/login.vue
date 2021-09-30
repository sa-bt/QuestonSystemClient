<template>
  <form class="p-4 p-md-5 border rounded-3 bg-light">
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" v-model="form.email" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="floatingPassword" v-model="form.password" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="login">Login</button>
    <hr class="my-4">
    <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
  </form>
</template>

<script>
    export default {
        name: "login",

        data() {
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            async login() {
                try {
                    await this.$auth.loginWith('laravelSanctum', {
                        data: {
                            email: this.form.email,
                            password: this.form.password
                        }
                    })
                } catch (e) {
                    console.log(e)
                }

            }
        }
    }
</script>

<style scoped>

</style>
