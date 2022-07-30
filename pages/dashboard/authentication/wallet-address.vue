<template>
  <div class="personal-info row mt-4 pt-2 pt-md-0 px-0 px-md-2 mx-auto">
    <div class="col-md-7">
      <wallet-address-add :currencyList="currencyList"></wallet-address-add>
    </div>
    <card-address-show :userFavFiatWallet="userFavFiatWallet" class="col-md-5"></card-address-show>
  </div>
</template>

<script>
import Btn from '~/components/widget/btn.vue'
import CardAddressShow from '~/components/widget/cardAddressShow.vue'
import WalletAddressAdd from '~/components/widget/walletAddressAdd.vue'
export default {
  layout: 'dashboard',
  components: {
    Btn,
    WalletAddressAdd,
    CardAddressShow
  },
  props: [],
  data() {
    return {
    }
  },
  computed: {
    currencyList() {
      return this.$store.state.currency.currencyListWithoutToman
    },
    userFavFiatWallet() {
      return this.$store.state.wallet.userFavFiatWallet
    },
  },
  async mounted() {
    if (this.currencyList.length === 0)
      await this.$store.dispatch('currency/getCurrencyList')
    if (this.userFavFiatWallet.length === 0)
      await this.$store.dispatch('wallet/getUserFavFiatWallet')
  },
}
</script>

<style lang="scss" scoped>

</style>