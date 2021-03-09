<template>
  <b-card :title="project.title"
    class="project-card">
    <b-card-text class="text-secondary">
      {{ project.description }}
    </b-card-text>

    <router-link :to="{ name: 'Detail', params: { id: project.projectId } }">
      <b-button block variant="outline-primary">
        Visit
      </b-button>
    </router-link>
  </b-card>
</template>

<script>
export default {
  name: "ProjectCard.vue",

  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.project-card .card-text {
  height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-card a {
  text-decoration: none;
}

.project-card a:hover {
  color: white;
}
</style>
