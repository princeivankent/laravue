<script>
import { employeeNumberRules, passwordRules } from '../helpers/validators'

export default {
  name: 'Login',
  metaInfo: {
    title: 'Login'
  },
  data () {
    return {
      valid: true,
      employee_number: '',
      password: '',
      employeeNumberRules,
      passwordRules
    }
  },
  computed: {
    hasError () {
      return this.$store.state.user.authenticationError ? true : false
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },

    reset () {
      this.$refs.form.reset()
    },

    resetValidation () {
      this.$refs.form.resetValidation()
    },

    async login () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('user/loginAction', {
          employee_number: this.employee_number, 
          password: this.password
        })
      }
      else {
        // Produce error message
      }
    }
  }
}
</script>

<template>
  <v-app>
    <v-toolbar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="red--text">ISUZU</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12 sm4 offset-sm4>
            <v-snackbar
              v-model="hasError"
              :multi-line="false"
              :right="true"
              :timeout="5000"
              :top="true"
              color="red darken-1"
            >
              {{ $store.state.user.authenticationError }}
              <v-btn
                color="white"
                flat
                @click="$store.commit('user/RESET_ERRORS')"
              >
                Close
              </v-btn>
            </v-snackbar>
            <v-form
              class="mt-5"
              ref="form"
              v-model="valid"
              @submit.prevent="login"
              lazy-validation
            >
              <label>Employee Number</label>
              <v-text-field
                v-model="employee_number"
                :counter="10"
                :rules="employeeNumberRules"
                solo
                autofocus
                required
              ></v-text-field>

              <label>Password</label>
              <v-text-field
                type="password"
                v-model="password"
                :rules="passwordRules"
                solo
                required
              ></v-text-field>

              <v-btn
                v-if="$store.state.user.isAuthenticating"
                :disabled="true"
                block
              >
                <v-icon small>fa fa-sync fa-spin</v-icon>&nbsp;
              </v-btn>

              <v-btn
                type="submit"
                v-else
                :disabled="!valid"
                color="success"
                block
              >
                Login &nbsp;
                <v-icon small>fa fa-arrow-right</v-icon>
              </v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
