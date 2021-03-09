<template>
  <div>
    <TheHeader></TheHeader>

    <div class="container home mb-5">
      <b-pagination :value="page"
                    :total-rows="total"
                    :per-page="limit"
                    @change="onPageClick"
                    class="mb-3" />

      <div class="home__listing">
        <ProjectCard v-for="project in projects"
                     :key="project.projectId"
                     :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '@/service/entity.service';
import ProjectCard from '@/components/pages/home/components/ProjectCard';
import TheHeader from "@/components/layout/TheHeader";

export default {
  name: 'Home',

  components: {
    ProjectCard,
    TheHeader
  },

  data() {
    return {
      projects: [],
      page: 1,
      total: 0,
      limit: 12
    }
  },

  created() {
    this.fetchProjects();
  },

  computed: {
    pageQueryParam() {
      return this.page - 1;
    }
  },

  methods: {
    fetchProjects() {
      get(`project/getAll?pageNumber=${this.pageQueryParam}&pageSize=${this.limit}`).then(res => {
        this.total = res.totalElements;
        this.projects = res.content;
      })
    },

    onPageClick(page) {
      this.page = page;

      this.fetchProjects();
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
