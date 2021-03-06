<template>
  <div class="home">
    <div class="container home__listing">
      <ProjectCard v-for="project in projects"
                   :key="project.projectId"
                   :project="project" />
    </div>
  </div>
</template>

<script>
import { get } from '@/service/entity.service';
import ProjectCard from '../components/project/ProjectCard';

export default {
  name: 'Home',

  components: {
    ProjectCard
  },

  data() {
    return {
      projects: []
    }
  },

  created() {
    this.fetchProjects();
  },

  methods: {
    fetchProjects() {
      get('project/getAllUnfinishedProjects').then(res => {
        this.projects = res;
      })
    }
  }
}
</script>

<style scoped>
.home__listing {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  row-gap: 32px;
}
</style>
