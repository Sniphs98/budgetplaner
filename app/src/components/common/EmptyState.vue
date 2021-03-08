<template>
  <b-card>
    <b-card-text class="empty-state-body">
      <slot name="default">
        <b-icon v-if="icon"
                :icon="icon"
                class="empty-state-icon">
        </b-icon>

        <h4 class="empty-state-title">{{ title }}</h4>

        <p class="empty-state-description">{{ description }}</p>
      </slot>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "EmptyState",

  props: {
    title: {
      type: String,
      required: false
    },

    description: {
      type: String,
      required: false
    },

    icon: {
      type: String,
      required: false
    },
  }
}
</script>

<style scoped>
.empty-state-title,
.empty-state-description {
  text-align: center;
}

.empty-state-description {
  margin-bottom: 0;
}

.empty-state-icon {
  display: block;
  margin: 0 auto 18px;
  font-size: 48px;
}
</style>
