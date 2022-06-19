<template>
  <section class="price-table mt-4 pt-3">
    <div class="container">
      <div class="trade-sec w-100">
        <arz-table :currencyList="currencyList"></arz-table>
      </div>
    </div>
  </section>
</template>

<script>
import arzTable from './arzTable.vue'
export default {
  components: { arzTable },
  computed: {
    currencyList() {
      return this.$store.state.currency.currencyList
    }
  }
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