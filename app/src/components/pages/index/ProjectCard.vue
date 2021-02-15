<template>
  <div class="project-card">
      <h4 class="project-card__title">
          <router-link :to="{ name: 'detail', params: { id: project.projectId } }">
              {{ project.title }}
            </router-link>
        </h4>

        <p class="project-card__description">{{ project.description }}</p>
  </div>
</template>

<script>
export default {
    name: 'Project card',
    
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.project-card {
    width: 100%;
    border: 1px solid var(--grey-400);
    border-radius: 4px;
    padding: 16px 8px;
}

.project-card__title {
    margin-top: 0;
    margin-bottom: 12px;
}

.project-card__title a {
    text-decoration: none;
    color: var(--grey-900);
}

.project-card__description {
    margin: 0;
}
</style>