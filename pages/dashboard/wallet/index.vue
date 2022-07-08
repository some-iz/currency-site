<template>
  <section class="container-fluid mt-3">
    <drop-down-wallet></drop-down-wallet>
  </section>
</template>

<script>
import DropDownWallet from '~/components/widget/dropDownWallet.vue'
export default {
  layout: 'dashboard',
  components: { DropDownWallet},
}
</script>

<style lang="scss" scoped>

</style>