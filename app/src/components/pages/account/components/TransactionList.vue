<template>
  <div>
    <h2>Transactions</h2>

    <b-list-group v-if="userTransactions.length > 0">
      <b-list-group-item v-for="currentTransaction in userTransactions"
                         :key="currentTransaction.transactionId"
                         class="transaction-list-item">
        <span>Project: {{ currentTransaction.project.title }}</span>

        <span class="transaction-list-amount">You've donated: ${{ currentTransaction.money }}</span>
      </b-list-group-item>
    </b-list-group>

    <b-card v-else>
      <b-card-body>
        <EmptyState title="No transactions"
                    icon="bag"
                    description="You have not made any transactions yet." />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {get} from "@/service/entity.service";
import LoginService from "@/service/login.service";

export default {
  name: "TransactionList",

  data() {
    return {
      user: null,
      transactions: []
    }
  },

  created() {
    this.getTransactions();
    this.user = this.loginService.getUser()
  },

  computed: {
    loginService() {
      return new LoginService();
    },

    userTransactions() {
      const userId = this.loginService.getUser().userId;

      return this.transactions.filter(currentTransaction => {
        return currentTransaction.userId === userId;
      })
    }
  },

  methods: {
    getTransactions() {
      get('transaction/getAll').then(transactions => {
        this.transactions = transactions;
      })
    },
  }
}
</script>

<style scoped>

.transaction-list-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.transaction-list-amount {
  text-align: right;
}
</style>
