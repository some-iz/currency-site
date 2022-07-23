<template>
  <div class="container-fluid">
    <div class="row mx-auto mt-3">
      <div class="col-md-7 px-0 px-md-2">
        <div class="d-flex mb-3">
          <label class="w-100 font-weight-bold">
            حساب مقصد :
            <select v-model="userBank" class="input-form w-100 mt-1 px-1" name="" id="">
              <option v-for="(bank , i) in bankAddress" :key="i" :value="bank.id">
                {{ bank.bank_name }} - (IR-{{ bank.shaba_number }})
              </option>
            </select>
          </label>
        </div>
        <label class="w-100 mb-3 font-weight-bold">
          مبلغ برداشتی :
          <input v-model="amount" class="input-form w-100 mt-1" type="text" />
        </label>
        <verification-code-get @sendCode="setCode($event)"></verification-code-get>
        <label class="w-100 mb-3 font-weight-bold">
          توضیحات :
          <span class="more">
            (اختیاری)
          </span>
          <textarea class="input-form w-100 mt-1" rows="3"></textarea>
        </label>
        <Btn :loading="loading" @click="submitFiatWithdraw()" class="mt-4 py-2 rounded font-weight-bold" width="full" size="small">ثبت درخواست برداشت</Btn>
      </div>
      <user-info-img width="col-md-5" :status="1" title="برداشت از حساب کاربری" imgSrc="/img/transaction/withdraw.png"
        imgAlt="info"></user-info-img>
    </div>
  </div>
</template>

<script>
import Btn from '~/components/widget/btn.vue'
import userInfoImg from '~/components/widget/userInfoImg.vue'
import VerificationCodeGet from '~/components/widget/verificationCodeGet.vue'
export default {
  components: { userInfoImg, VerificationCodeGet, Btn },
  layout: 'dashboard',
  data() {
    return {
      loading: false,
      codeInfo: {},
      userBank: '',
      amount: ''
    }
  },
  computed: {
    bankAddress() {
      return this.$store.state.address.bankAddress
    }
  },
  async mounted() {
    if (this.bankAddress.length === 0)
      await this.$store.dispatch('address/getBankAddress')
  },
  methods: {
    setCode(data) {
      this.codeInfo.code = data
    },
    async submitFiatWithdraw() {
      this.loading = true
      let res = await this.$store.dispatch('transaction/addUserFiatWithdrawTransaction', { code: this.codeInfo.code, token: this.codeInfo.token, amount: this.amount, userBank: this.userBank })
      if (JSON.parse(res.ok) === true) {
        this.$fire({
          title: "عملیات موفق",
          text: "برداشت از حساب شما با موفقیت انجام گردید...",
          type: "success",
          timer: 10000
        });
      } else {
        this.$fire({
          title: "عملیات ناموفق",
          text: res.error[0].description_details,
          type: "error",
          timer: 10000
        });
      }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
label{
  .more{
    font-size: 11px;
    color: $black-300;
  }
}
</style>