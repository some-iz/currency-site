<template>
    <div class="w-100">
        <div class="d-flex mb-3">
            <label class="w-100 font-weight-bold">
                حساب شما :
                <select v-model="userBank" class="input-form w-100 mt-1 px-1" name="" id="">
                    <option v-for="(bank, i) in bankAddress" :key="i" :value="bank.card_number">
                        شماره کارت : {{ bank.card_number }}
                    </option>
                </select>
            </label>
        </div>
        <label class="w-100 mb-3 font-weight-bold">
            مبلغ واریزی :
            <input v-model="amount" class="input-form w-100 mt-1" type="text" />
        </label>
        <Btn :loading="loading" @click="addDeposit()" class="mt-3 py-2 rounded font-weight-bold" width="full"
            size="small">
            اتصال به درگاه پرداخت
        </Btn>
    </div>
</template>

<script>
import Btn from './btn.vue';
export default {
    components: { Btn },
    data() {
        return {
            loading: false,
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
        async addDeposit() {
            if (this.userBank === '' || this.amount.trim() === '') {
                this.$fire({
                    title: "فیلد خالی!",
                    text: 'لطفا تمامی فیلدهای ضروری را پر نمایید...',
                    type: "warning",
                    timer: 10000
                });
                return false
            }
            this.loading = true
            let res = await this.$store.dispatch('transaction/addUserFiatDepositTransaction', { amount: this.amount, userBank: this.userBank })
            if (JSON.parse(res.ok) === true) {
                window.location.href = res.data[0].url
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

</style>