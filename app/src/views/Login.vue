<template>
  <div class="container">
    <b-card-group>
      <b-card title="Log in">
        <b-form-group label="Username">
          <b-form-input v-model="login.username" type="text"></b-form-input>
        </b-form-group>

        <b-form-group label="Password">
          <b-form-input v-model="login.password" type="password"></b-form-input>
        </b-form-group>

        <b-form>
          <b-btn type="submit" variant="primary">Login</b-btn>
        </b-form>
      </b-card>
      <b-card title="Sign up">
        <b-form>
          <b-row>
            <b-col cols="6">
              <b-form-group label="Firstname">
                <b-form-input v-model="signUp.firstname" type="text" required></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="6">
              <b-form-group label="Lastname">
                <b-form-input v-model="signUp.lastname" type="text" required></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-form-group label="Username">
            <b-form-input v-model="signUp.username" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group label="Password">
            <b-form-input v-model="signUp.password" type="password" required></b-form-input>
          </b-form-group>

          <b-btn type="reset" variant="outline-danger mr-3">Reset</b-btn>
          <b-btn type="submit" variant="primary">Login</b-btn>
        </b-form>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      login: {
        username: '',
        password: ''
      },
      signUp: {
        firstname: '',
        lastname: '',
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
