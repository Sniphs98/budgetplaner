<template>
    <div class="notification-center">
        <Notification v-for="notification in notifications" :notification="notification"/>
    </div>
</template>

<script>
import Notification from './Notification.vue';

export default {
    name: 'Notification Center',
    
    components: {
        Notification
    },
    
    mounted() {
        setInterval(this.removeOldNotifications, 300);
    },
    
    unmounted() {
        clearInterval(this.removeOldNotifications);
    },
    
    computed: {
        notifications() {
            return this.$store.getters.getNotifications;
        }
    },
    
    methods: {
        removeOldNotifications() {
            const currentTimeStamp = Date.now();
            
            this.$store.getters.getNotifications.forEach(currentNotification => {
                const timeDifference = this.calculateDifferenceInSeconds(currentTimeStamp, currentNotification.timestamp);
                
                if (timeDifference < 5) {
                    return;
                }

                this.$store.dispatch('removeNotificationById', currentNotification.id);
            });
        },
        
        calculateDifferenceInSeconds(greaterTimeValue, smallerTimeValue) {
            const timeDifference = greaterTimeValue - smallerTimeValue;
            const timeDifferenceInSeconds = timeDifference / 1000;
            
            return timeDifferenceInSeconds;
        }
    }
}
</script>

<style scoped>
.notification-center {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
}
</style>