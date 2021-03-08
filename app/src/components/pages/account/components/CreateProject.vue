<template>
  <div v-if="project">
    <h2>Create project</h2>

    <b-form @submit="onSubmitProject"
            class="mb-4">
      <b-row>
        <b-col cols="" lg="6">
          <b-form-group label="Title">
            <b-form-input v-model="project.title"
                          type="text"
                          id="project-title"
                          required />
          </b-form-group>
        </b-col>

        <b-col cols="12" lg="6">
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
          <b-btn class="create-project-btn"
                 type="submit"
                 variant="primary">
            Create project
          </b-btn>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import {post} from "@/service/entity.service";
import { deepClone } from "@/utils/object.utils";
import NotificationMixin from '@/mixins/notification.mixin';

export default {
  name: "CreateProject",

  mixins: [NotificationMixin],

  data() {
    return {
      project: {
        title: '',
        goalMoney: null,
        currentMoney: 0,
        description: ''
      }
    }
  },

  methods: {
    onSubmitProject(event) {
      event.preventDefault();

      this.createProject();
    },

    createProject() {
      const project = deepClone(this.project);
      project.goalMoney = Number(project.goalMoney);

      post('project/create', project).then(() => {
        this.createSuccessNotification('Created project successfully!');

        this.resetProjectData();
      }).catch(() => {
        this.createErrorNotification('Something went wrong.');
      });
    },

    resetProjectData() {
      this.project.title = '';
      this.project.goalMoney = null;
      this.project.description = '';
    },
  }
}
</script>

<style scoped>
.create-project-btn {
  width: 100%;
}

@media screen and (min-width: 992px) {
  .create-project-btn {
    width: auto;
  }
}
</style>
