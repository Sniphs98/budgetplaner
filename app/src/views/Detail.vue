<template>
  <div v-if="project" class="container">
    <div class="row">
      <div class="col-8">
        <h1>{{ project.title }}</h1>

        <p>{{ project.description }}</p>
      </div>

      <div class="col-4">
        <DonationControls :project="project" @donate="onDonate" />
      </div>
    </div>
  </div>
</template>

<script>
import { get, post } from '@/service/entity.service';
import DonationControls from "@/components/project/DonationControls";
import LoginService from "@/service/login.service";

export default {
  name: 'Detail',

  components: {
    DonationControls
  },

  data() {
    return {
      project: null
    }
  },

  created() {
    this.fetchProject();
  },

  computed: {
    loginService() {
      return new LoginService();
    }
  },

  methods: {
    fetchProject() {
      const projectId = this.$route.params.id;

      get(`project/getById/${projectId}`).then(res => this.project = res);
    },

    onDonate(donationValue) {
      this.project.currentMoney += donationValue;

      post('project/updateProject', this.project).then(() => {
        this.createTransaction();
      });
    },

    createTransaction() {
      post('transaction/create', {
        userId: this.loginService.getUser().userId,
        money: this.project.currentMoney,
        projectId: this.project.projectId
      })
    }
  }
}
</script>
