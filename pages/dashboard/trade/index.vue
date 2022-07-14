<template>
  <section v-if="haveQuery" class="container-fluid">
    <div class="row mx-0 mt-4">
      <div class=" col-md-9 px-0 pb-5 d-flex flex-column">
        <exchange></exchange>
        <div class="currency-info w-100">
          <VueTradingView :options="{
            width: width,
            symbol: 'BTCUSDT',
            style: 1,
            theme: 'light',
            locale: 'en',
            interval: 'D',
            hide_side_toolbar: false,
            allow_symbol_change: true
          }" class="" />
        </div>
      </div>
      <div class="col-md-3">
        <img @click="gett()" class="img-fluid" src="/img/trade/trade.jpg" alt="">
      </div>
    </div>
  </section>
  <section v-else>
    <b-col cols="12" class="mt-3">
      <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
    </b-col>
    <b-col cols="12" class="mt-3">
      <b-skeleton-img no-aspect height="350px"></b-skeleton-img>
    </b-col>
    <b-col cols="12" class="mt-3 mb-3">
      <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
    </b-col>
  </section>
</template>

<script>
import Exchange from '~/components/widget/exchange.vue'
import VueTradingView from 'vue-trading-view';
export default {
  layout: 'dashboard',
  components: { Exchange, VueTradingView },
  props: [],
  data() {
    return {
      haveQuery: false,
      width: 0,
    }    
  },
  mounted() {
    setTimeout(() => {
      if (document.querySelectorAll('.currency-info')[0])
        this.width = document.querySelectorAll('.currency-info')[0].offsetWidth
    },1)

    this.haveQuery = false
    if (!this.$route.query.currency) {
      this.$router.push('/dashboard')
    } else {
      this.haveQuery = true
    }
  },
  methods: {
    gett() {
      console.warn(document.querySelectorAll('.currency-info'))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>