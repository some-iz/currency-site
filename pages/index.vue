<template>
  <main>
    <fast-signup></fast-signup>
    <price-table class="mt-5"></price-table>
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
  data() {
    return {
      interval: null
    }
  },
  mounted() {
    this.interval = setInterval(() => this.$store.dispatch('currency/getCurrencyList'), 10000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>
<style lang="scss" scoped>

</style>
