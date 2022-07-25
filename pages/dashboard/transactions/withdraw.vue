<template>
  <div class="container-fluid">
    <div class="row mx-auto mt-3">
      <div class="col-md-7 px-0 px-md-2">
      </div>
      <div v-if="!loading" class="col-md-7 px-0 px-md-2">
        <withdraw-add v-if="view === 0"></withdraw-add>
        <withdraw-currency-add v-else></withdraw-currency-add>
      </div>
      <div v-else class="col-md-7 px-0 px-md-2">
        <b-skeleton-img no-aspect class="rounded"></b-skeleton-img>
      </div>
      <user-info-img width="col-md-5" :status="1" title="برداشت از حساب کاربری" imgSrc="/img/transaction/withdraw.png"
        imgAlt="info"></user-info-img>
    </div>
  </div>
</template>

<script>
import userInfoImg from '~/components/widget/userInfoImg.vue'
import WithdrawAdd from '~/components/widget/withdrawAdd.vue'
import WithdrawCurrencyAdd from '~/components/widget/withdrawCurrencyAdd.vue'
export default {
  components: { userInfoImg, WithdrawAdd, WithdrawCurrencyAdd },
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