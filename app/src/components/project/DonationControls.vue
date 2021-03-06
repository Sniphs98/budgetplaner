<template>
  <b-card>
    <b-row class="mb-3">
      <b-col cols="12">
        <b-progress :value="project.currentMoney" :max="project.goalMoney"></b-progress>
      </b-col>
    </b-row>

    <b-row class="mb-0">
      <b-col cols="12">
        <p>Money goal: <span class="donation-controls__value">{{ project.goalMoney }}</span></p>
      </b-col>
    </b-row>

    <b-row class="mb-4">
      <b-col cols="12">
        <p>Collected money: <span class="donation-controls__value">{{ project.currentMoney }}</span></p>
      </b-col>
    </b-row>

    <b-form @submit="onFormSubmit">
      <b-row>
        <b-col cols="8">
          <b-form-input v-model="toBeDonatedValue"
                        type="number"
                        placeholder="Enter value..."
                        min="0"
                        :max="maxDonationValue"
                        required>
          </b-form-input>
        </b-col>

        <b-col cols="4">
          <b-btn variant="primary" type="submit">
            Donate
          </b-btn>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
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
    }
  },

  data() {
    return {
      toBeDonatedValue: null
    }
  },

  methods: {
    onFormSubmit() {
      this.$emit('donate', Number(this.toBeDonatedValue));
    }
  }
}
</script>

<style scoped>
.donation-controls__value {
  font-size: 22px;
  font-weight: 600;
}
</style>
