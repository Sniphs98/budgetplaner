<template>
  <b-card>
    <b-row class="mb-3">
      <b-col cols="12">
        <b-progress :value="project.currentMoney" :max="project.goalMoney"></b-progress>
      </b-col>
    </b-row>

    <b-row class="mb-0">
      <b-col cols="12">
        <p>Money goal: <span class="donation-controls__value">${{ project.goalMoney }}</span></p>
      </b-col>
    </b-row>

    <b-row class="mb-4">
      <b-col cols="12">
        <p>Collected money: <span class="donation-controls__value">${{ project.currentMoney }}</span></p>
      </b-col>
    </b-row>

    <b-form @submit="onFormSubmit">
      <b-row>
        <b-col class="d-flex flex-nowrap">
          <b-form-input v-model="toBeDonatedValue"
                        type="number"
                        placeholder="Enter value..."
                        min="0"
                        :max="maxDonationValue"
                        required>
          </b-form-input>

          <b-btn v-if="loginService.isLoggedIn()"
                 type="submit"
                 class="ml-3"
                 variant="primary">
            Donate
          </b-btn>

          <template v-else>
            <div v-b-tooltip.right="'You\'re not logged in.'">
              <b-btn type="submit"
                     class="ml-3"
                     id="donate-btn"
                     variant="primary"
                     disabled>
                Donate
              </b-btn>
            </div>
          </template>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import LoginService from "@/service/login.service";

export default {
  name: "DonationControls",

  props: {
    project: {
      type: Object,
      required: true
    }
  },

  computed: {
    maxDonationValue() {
      return this.project.goalMoney - this.project.currentMoney;
    },

    loginService() {
      return new LoginService();
    },
  },

  data() {
    return {
      toBeDonatedValue: null
    }
  },

  methods: {
    onFormSubmit(event) {
      event.preventDefault();

      this.$emit('donate', Number(this.toBeDonatedValue));
      this.toBeDonatedValue = null;
    }
  }
}
</script>

<style scoped>
.donation-controls__value {
  font-size: 22px;
  font-weight: 600;
}

.donation-controls__inputs {
  flex-wrap: nowrap;
}
</style>
