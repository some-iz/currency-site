<template>
  <section class="container-fluid">
    <price-table :isWallet="true" width="w-100" class="mt-3"></price-table>
  </section>
</template>

<script>
import DropDownWallet from '~/components/widget/dropDownWallet.vue'
import PriceTable from '~/components/widget/priceTable.vue'
export default {
  layout: 'dashboard',
  components: { DropDownWallet, PriceTable },
}
</script>

<style lang="scss" scoped>

</style>