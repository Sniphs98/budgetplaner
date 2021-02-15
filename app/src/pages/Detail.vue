<template>
    <div v-if="project !== null" class="container">
        <div class="detail__wrapper">
            <div class="detail-information">
                <h1 class="detail-information__title">{{ project.title }}</h1>
                
                <p class="detail-information__description">{{ project.description }}</p>
            </div>
            
            <ProjectDonation :project="project"
                @update:currentMoney="refetchProduct"
                placeholder="Enter a value..." />
        </div>
    </div>
</template>

<script>
import httpApi from '/src/utils/httpApi.js';
import ProjectDonation from '../components/pages/detail/ProjectDonation.vue';

export default {
    name: 'Detail',
    
    components: {
        ProjectDonation
    },
    
    data() {
        return {
            project: null
        };
    },

    created() {
        this.fetchProduct()
            .then(project => { this.project = project });
    },

    methods: {
        fetchProduct() {
            return httpApi.get(`http://localhost:8080/project/getById/${this.$route.params.id}`).then(res => res.json());
        },
        
        refetchProduct() {
            return this.fetchProduct()
                .then(project => { this.project = project });
        }
    }
}
</script>

<style scoped>
.detail__wrapper {
    display: grid;
    grid-template-columns: 60% 40%;
    column-gap: 24px;
}
</style>