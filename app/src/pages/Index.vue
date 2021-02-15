<template>
  <div class="container index__grid">
    <template v-if="projects">
      <ProjectCard v-for="(project, index) in projects"
        :key="`project-${index}`"
        :project="project" />
    </template>
  </div>
</template>

<script>
import httpApi from '/src/utils/httpApi.js';
import ProjectCard from '../components/pages/index/ProjectCard.vue';

export default {
  name: 'Index',
  
  components: {
    ProjectCard
  },
  
  data() {
    return {
      projects: []
    }
  },
  
  created() {
    this.fetchProjects().then(projects => {
      this.projects = projects;
    });
  },
  
  methods: {
    fetchProjects() {
      return httpApi.get('http://localhost:8080/project/getAll')
        .then(res => res.json())
    }
  }
}
</script>

<style>
.index__grid {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 12px 24px;
}
</style>