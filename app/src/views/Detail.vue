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
import { get, update } from '@/service/entity.service';
import DonationControls from "@/components/project/DonationControls";

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

  methods: {
    fetchProject() {
      const projectId = this.$route.params.id;

      get(`project/getById/${projectId}`).then(res => this.project = res);
    },

    onDonate(donationValue) {
      this.project.currentMoney += donationValue;

      update('project/updateProject', this.project);
    }
  }
}
</script>
