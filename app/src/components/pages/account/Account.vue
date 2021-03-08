<template>
  <div class="container" v-if="user">
    <h1>Welcome, {{ user.firstName }}!</h1>
    <p>Here you can see your projects, create new ones and manage your account.</p>

    <CreateProject />

    <TransactionList />

    <hr>
    <p>To log out click <b-link v-b-modal.logoutModal class="link-danger">here.</b-link></p>

    <LogoutModal />
  </div>

  <div v-else>
    <div class="container">
      <b-alert variant="danger" show>You're not logged in</b-alert>
    </div>
  </div>
</template>

<script>
import LoginService from "@/service/login.service";
import LogoutModal from "@/components/pages/account/components/LogoutModal";
import CreateProject from "@/components/pages/account/components/CreateProject";
import TransactionList from "@/components/pages/account/components/TransactionList";

export default {
  name: "Account",

  components: {TransactionList, CreateProject, LogoutModal },

  data() {
    return {
      user: null,
    }
  },

  created() {
    this.user = this.loginService.getUser();
  },

  computed: {
    loginService() {
      return new LoginService();
    }
  }
}
</script>

<style scoped>

</style>
