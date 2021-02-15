<template>
  <div class="notification" :class="notificationTypeClass">
      <h5 class="notification__title">{{ notification.title }}</h5>
      <p class="notification__message">{{ notification.message }}</p>
  </div>
</template>

<script>
export default {
    props: {
        notification: {
            type: Object,
            required: true
        }
    },
    
    computed: {
        notificationTypeClass() {
            const type = this.notification.type || 'default';

            return [`notification--${type}`];
        }
    }
}
</script>

<style scoped>
.notification {
    position: relative;
    background-color: var(--grey-100);
    width: 320px;
    border-radius: 4px;
    padding: 16px;
    overflow: hidden;
    margin-top: 10px;
}

.notification__title {
    margin-bottom: 12px;
}

.notification__message {
    margin-bottom: 0;
}

.notification::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    left: 0;
    top: 0;
}

.notification--error::before {
    background-color: rgb(212, 69, 69);
}
</style>