<template>
  <div class="container">
      <TextField v-model="firstname" label="Firstname" placeholder="Enter a firstname..." />
      
      <TextField v-model="lastname" label="Lastname" placeholder="Enter a lastname..." />
      
      <Button @click="createUser"
        :disabled="isSubmitButtonDisabled">
          Submit
      </Button>
  </div>
</template>

<script>
import httpApi from '/src/utils/httpApi.js';

export default {
    name: "User create",
    
    data() {
        return {
            firstname: null,
            lastname: null
        };
    },
    
    computed: {
        isSubmitButtonDisabled() {
            return !this.firstname || !this.lastname;
        }
    },
    
    methods: {
        createUser() {
            httpApi.post('http://localhost:8080/user/create', {
                firstname: this.firstname,
                lastname: this.lastname
            });
        }
    }
}
</script>

<style>

</style>