<template>
  <div>
    <TheHeader></TheHeader>

    <div class="container">
      <b-card-group>
        <b-card title="Log in">
          <b-form @submit="onLogin">
            <b-row>
              <b-col cols="6">
                <b-form-group label="Firstname">
                  <b-form-input v-model="login.firstname"
                                id="login-firstname"
                                type="text"
                                required />
                </b-form-group>
              </b-col>

              <b-col cols="6">
                <b-form-group label="Lastname">
                  <b-form-input v-model="login.lastname"
                                id="login-lastname"
                                type="text"
                                required />
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group label="Password">
              <b-form-input v-model="login.password"
                            id="login-password"
                            type="password"
                            required />
            </b-form-group>

            <b-btn type="submit" variant="primary">Login</b-btn>
          </b-form>
        </b-card>

        <b-card title="Sign up">
          <b-form @submit="onSignUp">
            <b-row>
              <b-col cols="6">
                <b-form-group label="Firstname">
                  <b-form-input v-model="signUp.firstname"
                                id="signup-firstname"
                                type="text"
                                required />
                </b-form-group>
              </b-col>

              <b-col cols="6">
                <b-form-group label="Lastname">
                  <b-form-input v-model="signUp.lastname"
                                id="signup-lastname"
                                type="text"
                                required />
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group label="Password">
              <b-form-input v-model="signUp.password"
                            id="signup-password"
                            type="password"
                            required />
            </b-form-group>

            <b-btn type="reset" variant="outline-danger mr-3">Reset</b-btn>
            <b-btn type="submit" variant="primary">Sign up</b-btn>
          </b-form>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import { post } from '@/service/entity.service';
import LoginService from '@/service/login.service';
import TheHeader from "@/components/layout/TheHeader";

export default {
  name: "Login",

  components: {
    TheHeader
  },

  data() {
    return {
      login: {
        firstname: '',
        lastname: '',
        password: ''
      },
      signUp: {
        firstname: '',
        lastname: '',
        username: '',
        password: ''
      }
    }
  },

  computed: {
    loginService() {
      return new LoginService();
    }
  },

  methods: {
    onSignUp(event) {
      event.preventDefault();

      const userName = this.signUp.firstname + ' ' + this.signUp.lastname;

      post('user/create', {
        userName: userName,
        firstName: this.signUp.firstname,
        lastName: this.signUp.lastname,
        password: this.signUp.password
      }).then(() => {
        this.loginUser(userName, this.signUp.password, this.signUp.firstname, this.signUp.lastname);
      })
    },

    onLogin(event) {
      event.preventDefault();

      const userName = this.login.firstname + ' ' + this.login.lastname;

      this.loginUser(userName, this.login.password, this.login.firstname, this.login.lastname)
    },

    loginUser(username, password, firstname, lastname) {
      post('user/login', {
        userName: username,
        firstName: firstname,
        lastName: lastname,
        password
      }).then(response => response.json())
        .then(user => {
          this.loginService.login(user);

          this.$router.push({ name: 'Home' })
       });
    }
  }
}
</script>

<style scoped>

</style>
