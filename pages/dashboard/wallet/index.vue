<template>
  <section class="container-fluid px-1 px-sm-2 px-lg-3">
    <price-table customAction="wallet/getUserWallet" :isWallet="true" width="w-100" class="mt-3"></price-table>
  </section>
</template>

<script>
import DropDownWallet from '~/components/widget/dropDownWallet.vue'
import PriceTable from '~/components/widget/priceTable.vue'
export default {
  layout: 'dashboard',
  components: { DropDownWallet, PriceTable },
  computed: {
    userWallet() {
      return this.$store.state.wallet.userWallet
    }
  },
}
</script>

<style lang="scss" scoped>

</style>