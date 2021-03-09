<template>
  <div>
    <TheHeader></TheHeader>

    <div v-if="project" class="container">
      <b-row>
        <b-col cols="12" lg="6" xl="8">
          <h1>{{ project.title }}</h1>

          <p>{{ project.description }}</p>
        </b-col>

        <b-col cols="12" lg="6" xl="4">
          <DonationControls :project="project" @donate="onDonate" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { get, post } from '@/service/entity.service';
import DonationControls from "@/components/pages/detail/components/DonationControls";
import LoginService from "@/service/login.service";
import TheHeader from "@/components/layout/TheHeader";

export default {
  name: 'Detail',

  components: {
    DonationControls,
    TheHeader
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
