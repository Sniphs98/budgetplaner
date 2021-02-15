<template>
  <div class="project-donation">
      
      <p class="project-donation-info">Money target: <span class="project-donation-info__value">{{ project.goalMoney }}€</span></p>
      <p class="project-donation-info">Collected money: <span class="project-donation-info__value">{{ project.currentMoney }}€</span></p>
      
      <div class="project-donation-inputs">
        <NumberField v-model="donationValue"
            class="project-donation-inputs__number"
            :min="0" />

        <Button class="project-donation-inputs__submit-btn"
            @click="updateCollectedMoney"
            :disabled="isDonationButtonDisabled">
            Donate
        </Button>
    </div>
  </div>
</template>

<script>
import httpApi from '/src/utils/httpApi.js';

export default {
    name: 'Project Donation',
    
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    
    data() {
        return {
            donationValue: undefined
        }
    },
    
    computed: {
        isDonationButtonDisabled() {
            return !this.donationValue;
        },
        
        canDonate() {
            const summedMoney = this.project.currentMoney + this.donationValue;
            
            if (summedMoney > this.project.goalMoney) {
                return false;
            }
            
            return true;
        }
    },
    
    methods: {
        updateCollectedMoney() {
            if (!this.canDonate) {
                this.$store.dispatch('createNotification', {
                    title: 'Can\'t donate',
                    message: 'You can\'t create a notification because the money target has been reached.',
                    type: 'error'
                });
                
                return;
            }
            
            const project = {...this.project};
            project.currentMoney += this.donationValue;
            
            httpApi.post('http://localhost:8080/project/updateProject', {
                ...project
            }).then(() => {
                this.donationValue = undefined;
                this.$emit('update:currentMoney');
            });
        }
    }
}
</script>

<style scoped>
.project-donation {
    background: var(--grey-200);
    border-radius: 4px;
    padding: 24px 16px;
}

.project-donation-inputs {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.base-field.project-donation-inputs__number {
    flex: 1;
    margin-right: 15px;
    margin-bottom: 0;

}

.project-donation-info {
    margin-top: 0;
}

.project-donation-info__value {
    font-size: 24px;
}
</style>