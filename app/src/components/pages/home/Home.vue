<template>
  <div class="home mb-5">
    <div class="container home__listing">
      <ProjectCard v-for="project in projects"
                   :key="project.projectId"
                   :project="project" />
    </div>
  </div>
</template>

<script>
import { get } from '@/service/entity.service';
import ProjectCard from '@/components/pages/home/components/ProjectCard';

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
  grid-template-columns: 1fr;
  column-gap: 16px;
  row-gap: 32px;
}

@media screen and (min-width: 768px) {
  .home__listing {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 992px) {
  .home__listing {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1200px) {
  .home__listing {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
