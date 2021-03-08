export default {
    methods: {
        createSuccessNotification(message) {
            this.$bvToast.toast(message, {
                title: 'Success',
                autoHideDelay: 2500,
                toaster: 'b-toaster-top-right',
                variant: 'success',
                solid: true
            });
        },

        createErrorNotification(message) {
            this.$bvToast.toast(message, {
                title: 'Error!',
                autoHideDelay: 2500,
                toaster: 'b-toaster-top-right',
                variant: 'danger',
                solid: true
            });
        }
    }
}
