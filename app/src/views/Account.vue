<template>
  <div class="container" v-if="user">
    <h1>Welcome, {{ user.userName }}!</h1>
    <p>Here you can see your projects, create new ones and manage your account.</p>

    <h2>Create project</h2>

    <b-form @submit="onSubmitProject"
      class="mb-4">
      <b-row>
        <b-col cols="6">
          <b-form-group label="Title">
            <b-form-input v-model="project.title"
                          type="text"
                          id="project-title"
                          required />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group label="Target">
            <b-form-input v-model="project.goalMoney"
                          type="number"
                          min="0"
                          id="project-target"
                          required />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <b-form-group label="Description">
            <b-form-textarea v-model="project.description"
                             rows="8"
                             id="project-description" />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <b-btn type="submit"
                 variant="primary">
            Create project
          </b-btn>
        </b-col>
      </b-row>
    </b-form>

    <h2>Transactions</h2>

    <b-list-group v-if="userTransactions.length > 0">
      <b-list-group-item v-for="currentTransaction in userTransactions"
                         :key="currentTransaction.transactionId"
                         class="transaction-list-item">
        <span>Project: {{ currentTransaction.projectId }}</span>

        <span class="transaction-list-amount">You've donated: ${{ currentTransaction.money }}</span>
      </b-list-group-item>
    </b-list-group>

    <EmptyState v-else title="No transactions"
                icon="bag"
                description="You have not made any transactions yet." />

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
import LogoutModal from "@/components/common/LogoutModal";
import { get, post } from "@/service/entity.service";

export default {
  name: "Account",
  components: { LogoutModal },
  data() {
    return {
      user: null,
      transactions: [],
      project: {
        title: '',
        goalMoney: null,
        description: ''
      }
    }
  },

  created() {
    this.user = this.loginService.getUser();

    this.getTransactions();
  },

  computed: {
    loginService() {
      return new LoginService();
    },

    userTransactions() {
      const userId = this.loginService.getUser().userId;

      return this.transactions.filter(currentTransaction => {
        return currentTransaction.userId === userId;
      })
    }
  },

  methods: {
    onSubmitProject(event) {
      event.preventDefault();

      this.createProject();
    },

    getTransactions() {
      get('transaction/getAll').then(transactions => {
        this.transactions = transactions;
      })
    },

    resetProjectData() {
      this.project.title = '';
      this.project.goalMoney = null;
      this.project.description = '';
    },

    createProject() {
      const project = JSON.parse(JSON.stringify(this.project));
      project.currentMoney = 0;
      project.goalMoney = Number(project.goalMoney);

      post('project/create', project).then(() => {
        this.createSuccessToast();

        this.resetProjectData();
      }).catch(() => {
        this.createErrorToast();
      });
    },

    createSuccessToast() {
      this.$bvToast.toast('Created project successfully!', {
        title: 'Success!',
        autoHideDelay: 2500,
        toaster: 'b-toaster-top-right',
        variant: 'success',
        solid: true
      });
    },

    createErrorToast() {
      this.$bvToast.toast('Something went wrong while creating your project!', {
        title: 'Error!',
        autoHideDelay: 2500,
        toaster: 'b-toaster-top-right',
        variant: 'danger',
        solid: true
      });
    }
  }
}
</script>

<style scoped>
.transaction-list-item {
  display: grid;
  grid-template-columns: 1fr 20%;
}

.transaction-list-amount {
  text-align: right;
}
</style>
