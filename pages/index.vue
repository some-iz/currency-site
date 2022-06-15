<template>
  <main>
    <fast-signup></fast-signup>
    <!-- <exchange></exchange> -->
    <price-table></price-table>
    <social-media class="mt-5 mb-5"></social-media>
  </main>
</template>

<script>
import exchange from '~/components/widget/exchange.vue'
import FastSignup from '~/components/widget/fastSignup.vue'
import PriceTable from '~/components/widget/priceTable.vue'
import SocialMedia from '../components/widget/socialMedia.vue'
export default {
  components: { exchange, FastSignup, PriceTable, SocialMedia },
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
main{
  height: 1000px;
}
</style>
