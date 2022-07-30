<template>
  <section class="price-table">
    <div :class="width">
      <div class="trade-sec w-100">
        <arz-table :isWallet="isWallet" :loading="ssr === true ? false : loading"
          :currencyList="isWallet ? userWallet : currencyList"></arz-table>
      </div>
    </div>
  </section>
</template>

<script>
import arzTable from './arzTable.vue'
export default {
  props: {
    width: {
      default: 'container',
      type: String
    },
    ssr: {
      default: false,
      type: Boolean
    },
    isWallet: {
      default: false,
      type: Boolean
    },
    customAction: {
      default: 'wallet/getUserWallet',
      type: String
    }
  },
  components: { arzTable },
  data() {
    return {
      interval: null,
      loading: true,
    }
  },
  computed: {
    currencyList() {
      return this.$store.state.currency.currencyList
    },
    userWallet() {
      return this.$store.state.wallet.userWallet
    }
  },
  async mounted() {
    if(this.currencyList.length === 0 && !this.isWallet)
      await this.$store.dispatch('currency/getCurrencyList')
    if (this.userWallet.length === 0 && this.isWallet)
      await this.$store.dispatch(`${this.customAction}`)
    this.loading = false
    if (!this.isWallet)
      this.interval = setInterval(() => this.$store.dispatch('currency/getCurrencyList'), 10000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>

<style lang="scss" scoped>
.price-table{
  width: 100%;
  .trade-sec{
    border-radius: 10px;
    border: 2px solid $black-70;
    overflow: hidden;
    box-shadow: 0 0 20px $black-70;
    overflow-x: auto;
    scrollbar-width: thin;
    .show-all{
      color: $black-200;
      cursor: pointer;
      font-size: 13px;
    }
  }
  .trade-sec::-webkit-scrollbar {
    width: 9px;
    background: $black-100;
  }
  .trade-sec::-webkit-scrollbar-thumb {
    background: $black-200;
  }
}
</style>