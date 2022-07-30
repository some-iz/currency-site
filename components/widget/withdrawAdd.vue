<template>
    <div class="w-100">
        <div class="d-flex mb-3">
            <label class="w-100 font-weight-bold">
                حساب مقصد :
                <select v-model="userBank" class="input-form w-100 mt-1 px-1" name="" id="">
                    <option v-for="(bank, i) in bankAddress" :key="i" :value="bank.shaba_number">
                        شماره شبا : IR-{{ bank.shaba_number }}
                    </option>
                </select>
            </label>
        </div>
        <label class="w-100 mb-3 font-weight-bold">
            مبلغ برداشتی :
            <span class="more">
                (تومان)
            </span>
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
        <Btn :loading="loading" @click="submitFiatWithdraw()" class="mt-3 py-2 rounded font-weight-bold" width="full"
            size="small">ثبت درخواست برداشت</Btn>
    </div>
</template>

<script>
import Btn from '~/components/widget/btn.vue'
import VerificationCodeGet from './verificationCodeGet.vue'
export default {
    components: { VerificationCodeGet, Btn },
    layout: 'dashboard',
    data() {
        return {
            loading: false,
            codeInfo: {
                code: '',
                token: ''
            },
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
            this.codeInfo = data
        },
        async submitFiatWithdraw() {
            if (this.codeInfo.token === '') {
                this.$fire({
                    title: "درخواست ارسال کد!",
                    text: 'لطفا درخواست ارسال کد ۴ رقمی را بدهید...',
                    type: "warning",
                    timer: 10000
                });
                return false
            }
            if (this.userBank === '' || this.amount.trim() === '' || this.codeInfo.code.trim() === '') {
                this.$fire({
                    title: "فیلد خالی!",
                    text: 'لطفا تمامی فیلدهای ضروری را پر نمایید...',
                    type: "warning",
                    timer: 10000
                });
                return false
            }
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