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
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :counter="10"
      :rules="passwordRules"
      label="password"
      required
    ></v-text-field>

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
    <v-btn
      color="info"
      @click="login"
    >
      Login
    </v-btn>
  </v-form>

</div>

</template>

<script>
    export default {
        name: "login",
        data: () => ({
            valid: true,
            password: '',
            passwordRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }),

        methods: {
            validate() {
                this.$refs.form.validate()
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
            async login() {
              console.log(66,
              this.email,this.password)
                try {
                    await this.$auth.loginWith('laravelSanctum', {
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    })
                } catch (e) {
                    console.log(e)
                }

            }
        },

    }
</script>

<style scoped>

</style>
