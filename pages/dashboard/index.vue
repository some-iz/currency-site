<template>
  <main class="container-fluid py-3 px-1 px-sm-2 px-lg-3">
    <!-- <alert-box base="success" icon="exclamation-circle-fill" class="mb-3"></alert-box> -->
    <price-table width="w-100" class=""></price-table>
  </main>
</template>

<script>
import AlertBox from '~/components/widget/alertBox.vue';
import PriceTable from '~/components/widget/priceTable.vue';
export default {
  layout: 'dashboard',
  components: {
    PriceTable,
    AlertBox,
  },
  computed: {
    user() {
      return this.$store.state.userInfo
    }
  }
}
</script>

<style lang="scss" scoped>

</style>