<template>
  <main class="container-fluid py-3">
    <alert-box base="success" icon="exclamation-circle-fill" class="mb-3"></alert-box>
    <price-table width="w-100" class="mt-4"></price-table>
  </main>
</template>

<script>
import AlertBox from '~/components/widget/alertBox.vue';
import PriceTable from '~/components/widget/priceTable.vue';
export default {
  layout: 'dashboard',
  components: {
    VueTradingView,
    PriceTable,
    AlertBox,
  }
}
</script>

<style lang="scss" scoped>

</style>