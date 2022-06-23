<template>
    <div>
        <VueTradingView :options="{
            symbol: 'BTCUSDT',
            style: 1,
            theme: 'light',
            locale: 'en',
            interval: 'D',
            hide_side_toolbar: false,
            allow_symbol_change: true
        }" />
    </div>
</template>

<script>
  import VueTradingView from 'vue-trading-view';
  export default {
    layout: 'dashboard',
    components: {
      VueTradingView,
    }
  }
</script>

<style lang="scss" scoped>

</style>