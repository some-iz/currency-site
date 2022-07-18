<template>
  <section class="container-fluid">
    {{ userWallet }}
    <price-table :userWallet="userWallet" :isWallet="true" width="w-100" class="mt-3"></price-table>
  </section>
</template>

<script>
import DropDownWallet from '~/components/widget/dropDownWallet.vue'
import PriceTable from '~/components/widget/priceTable.vue'
export default {
  layout: 'dashboard',
  components: { DropDownWallet, PriceTable },
  async mounted() {
    await this.$store.dispatch('wallet/getUserWallet')
  },
  computed: {
    userWallet() {
      return this.$store.state.wallet.userWallet
    }
  },
}
</script>

<style lang="scss" scoped>

</style>