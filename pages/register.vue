<template>
  <div class="mt-16">
    <v-toolbar class="mb-10 justify-center">
      <v-toolbar-title >Login</v-toolbar-title>
    </v-toolbar>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="password"
        :counter="10"
        :rules="passwordRules"
        label="Name"
        required
      >


      </v-text-field><v-text-field
        v-model="password"
        :counter="10"
        :rules="passwordRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-input

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>

  </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            async register() {
                try {
                    await this.$axios.get('sanctum/csrf-cookie')
                    await this.$axios.post('api/v1/auth/register', this.form)
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
