<template>
  <b-modal id="logoutModal" title="Logout">
    <p>Are you sure you want to log out?</p>

    <template #modal-footer>
      <b-btn variant="outline-secondary" @click="closeModal">Cancel</b-btn>
      <b-btn variant="danger" @click="confirmLogout">Logout</b-btn>
    </template>
  </b-modal>
</template>

<script>
import LoginService from "@/service/login.service";

export default {
  name: "LogoutModal",

  computed: {
    loginService() {
      return new LoginService();
    }
  },

  methods: {
    closeModal() {
      this.$bvModal.hide('logoutModal');
    },

    confirmLogout() {
      this.loginService.logout();
      this.closeModal();

      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>

</style>
