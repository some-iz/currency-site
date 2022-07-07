<template>
  <main>
    <fast-signup></fast-signup>
    <price-table width="container" class="mt-5 pt-3"></price-table>
    <app class="mt-5 pt-4 pb-4"></app>
    <social-media class="mt-5"></social-media>
  </main>
</template>

<script>
import App from '~/components/widget/app.vue'
import exchange from '~/components/widget/exchange.vue'
import FastSignup from '~/components/widget/fastSignup.vue'
import PriceTable from '~/components/widget/priceTable.vue'
import SocialMedia from '../components/widget/socialMedia.vue'
import CustomModal from '~/components/widget/customModal.vue'
export default {
  components: { exchange, FastSignup, PriceTable, SocialMedia, App, CustomModal },
  name: 'IndexPage',
  async fetch() {
    await this.$store.dispatch('currency/getCurrencyList')
  },
}
</script>
<style lang="scss" scoped>

</style>
