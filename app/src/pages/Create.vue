<template>
  <div class="container">
      <TextField v-model="title" label="Title" placeholder="Enter a title..." />
      <NumberField v-model="goalMoney" label="Money target" min="0" placeholder="Enter a moneny target" />
      <TextArea v-model="description" label="Description" placeholder="Add a description..." />
      
      <Button @click="onSubmit">
        Submit
      </Button>
  </div>
</template>

<script>
import httpApi from '/src/utils/httpApi.js';

export default {
    name: 'Create',
    
    data() {
      return {
        title: '',
        goalMoney: 0,
        description: ''
      }
    },
    
    methods: {
      onSubmit() {
        this.createProject()
          .then(this.resetData)
      },
      
      createProject() {
        return httpApi.post('http://localhost:8080/project/create', {
          goalMoney: this.goalMoney,
          title: this.title,
          currentMoney: 0,
          description: this.description
        })
      },
      
      resetData() {
        this.title = '';
        this.goalMoney = 0;
        this.currentMoney = 0;
        this.description = '';
      }
    }
}
</script>
