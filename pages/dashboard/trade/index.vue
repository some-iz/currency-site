<template>
  <section v-if="haveQuery" class="container-fluid">
    <div class="row mx-0 mt-4">
      <div class=" col-md-9 px-0 pb-5 d-flex flex-column">
        <exchange></exchange>

        <div class="w-100 mt-4">
          <div class="w-100 d-flex tab-bar font-weight-bold mb-2">
            <div class="w-100 d-flex justify-content-center align-items-center active">
              معرفی ارز
            </div>
            <div class="w-100 d-flex justify-content-center align-items-center">
              چارت ها
            </div>
            <div class="w-100 d-flex justify-content-center align-items-center">
              سوالات متداول
            </div>
          </div>
          <div class="currency-info w-100 mb-3 px-md-2">
            <VueTradingView :options="{
                width: 'auto',
                symbol: $route.query.currency+'USDT',
                style: 1,
                theme: 'light',
                locale: 'en',
                interval: 'D',
                hide_side_toolbar: false,
                allow_symbol_change: false
              }" class="" />
          </div>
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
.tab-bar{
  height: 60px;
  background: $black-50;
  overflow: hidden;
  border-radius: 6px;
  >div{
    height: 100%;
    cursor: pointer;
    font-size: 13.5px;
    color: $black-600;
  }
  .active{
    background: $primary-color;

  }
}
</style>