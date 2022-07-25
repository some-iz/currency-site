<template>
    <div class="w-100">
        <div class="d-flex flex-column flex-sm-row qr-code align-items-center">
            <img width="200px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt="">
            <div class="d-flex flex-column">
                <h6 class="mt-1 font-weight-bold">کیف پول فعال برای واریز :</h6>
                <span class="address d-flex align-items-center">
                    {{defaultDepositCurrencyAddress.address}}
                    <copy-text class="mr-2" :text="defaultDepositCurrencyAddress.address"></copy-text>
                </span>
                <h6 v-if="defaultDepositCurrencyAddress.tag" class="mt-3">تگ کیف پول :</h6>
                <span v-if="defaultDepositCurrencyAddress.tag" class="address d-flex align-items-center">
                    {{ defaultDepositCurrencyAddress.tag }}
                    <copy-text class="mr-2" :text="defaultDepositCurrencyAddress.tag"></copy-text>
                </span>
                <h6 class="mt-3 mb-2 network">
                    شبکه انتقال ارز :
                    {{ defaultDepositCurrencyAddress.network }}
                </h6>
            </div>
        </div>

        <label class="w-100 mb-3 mt-3 font-weight-bold">
            مقدار دقیق واریز شما :
            <input v-model="amount" class="input-form w-100 mt-1" type="text" />
        </label>
        <label class="w-100 mb-3 font-weight-bold">
            شماره پیگیری تراکنش (هش تراکنش) :
            <input v-model="tx" class="input-form w-100 mt-1" type="text" />
        </label>

        <Btn :loading="loading" @click="addDepositCurrencyReq()" class="mt-4 py-2 rounded font-weight-bold" width="full"
            size="small">
            ثبت درخواست واریز
        </Btn>
    </div>
</template>

<script>
import Btn from './btn.vue'
import CopyText from './copyText.vue'
export default {
    components: {
        Btn,
        CopyText
    },
    data() {
        return {
            amount: '',
            tx: '',
            loading: false
        }
    },
    computed: {
        defaultDepositCurrencyAddress() {
            return this.$store.state.address.defaultDepositCurrencyAddress
        },
    },
    async mounted() {
        let res = await this.$store.dispatch('address/getDefaultDepositCurrencyAddress', this.$route.query.currency.toUpperCase())
        if (!JSON.parse(res.ok))
            this.$router.push('/dashboard')
    },
    methods: {
        async addDepositCurrencyReq() {
            this.loading = true
            let res = await this.$store.dispatch('transaction/addUserCurrencyTransactionDeposit', { address: this.defaultDepositCurrencyAddress.address, amount: this.amount, symbol: this.$route.query.currency.toUpperCase(), network: this.defaultDepositCurrencyAddress.network, tx: this.tx })
            if (JSON.parse(res.ok) === true) {
                this.$fire({
                    title: "عملیات موفق",
                    text: "واریز به کیف پول با موفقیت ثبت و منتظر تایید ادمین میباشد...",
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


.qr-code{
    background: $black-20;
    border: 2px solid $black-50;
    border-radius: 10px;
    .address{
        font-size: 13px;
    }
    .network{
        font-size: 13px;
    }
}
</style>