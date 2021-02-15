import { createStore } from 'vuex';
import { generateUUID } from './utils/general.utils';

export default createStore({
    state() {
        return {
            notifications: []
        }
    },
    getters: {
        getNotifications(state) {
            return state.notifications.sort((firstNotification, secondNotification) => {
                if (firstNotification.timestamp > secondNotification.timestamp) {
                    return 1;
                }
                
                if (firstNotification.timestamp < secondNotification.timestamp) {
                    return -1;
                }

                return 0;
            });
        },
    },
    mutations: {
        createNotification(state, newNotification) {
            const notification = newNotification;
            
            if (!notification.timestamp) {
                notification.timestamp = Date.now();
            }
            
            if (!notification.id) {
                notification.id = generateUUID();
            }
            
            state.notifications = [...state.notifications, newNotification];
        },
        
        removeNotificationById(state, id) {
            const filteredNotifications = state.notifications.filter(currentNotification => { 
                if (currentNotification.id == id) {
                    return false;
                }
                
                return true;
             });

             state.notifications = filteredNotifications;
        }
    },
    actions: {
        removeNotificationById(context, id) {
            context.commit('removeNotificationById', id);
        },
        
        createNotification(context, newNotification) {
            context.commit('createNotification', newNotification);
        }
    }
});
