<template>
  <section class="price-table">
    <div :class="width">
      <div class="trade-sec w-100">
        <arz-table :loading="ssr === true ? false : loading" :currencyList="currencyList"></arz-table>
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
    }
  },
  async mounted() {
    await this.$store.dispatch('currency/getCurrencyList')
    this.loading = false
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
    .show-all{
      color: $black-200;
      cursor: pointer;
      font-size: 13px;
    }
  }
}
</style>