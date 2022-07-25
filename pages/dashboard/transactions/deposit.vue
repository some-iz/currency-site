<template>
  <div class="container-fluid">
    <div class="row mx-auto mt-3">
      <div v-if="!loading" class="col-md-7 px-0 px-md-2">
        <DepositAdd v-if="view === 0"></DepositAdd>
        <deposit-currency-add v-else></deposit-currency-add>
      </div>
      <div v-else class="col-md-7 px-0 px-md-2">
        <b-skeleton-img no-aspect class="rounded"></b-skeleton-img>
      </div>
      <user-info-img width="col-md-5" :status="1" title="واریز به حساب کاربری" imgSrc="/img/transaction/deposit.png"
        imgAlt="info"></user-info-img>
    </div>
  </div>
</template>

<script>
import userInfoImg from '~/components/widget/userInfoImg.vue'
import DepositAdd from '~/components/widget/depositAdd.vue'
import DepositCurrencyAdd from '~/components/widget/depositCurrencyAdd.vue'
export default {
  components: { userInfoImg, DepositAdd, DepositCurrencyAdd },
  layout: 'dashboard',
  data() {
    return {
      view: 0,
      loading: true,
    }
  },
  mounted() {
    if (this.$route.query.currency)
      this.view = 1
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>

</style>