<template>
    <div class="w-100">
        <div class="d-flex mb-3">
            <label class="w-100 font-weight-bold">
                انتخاب وضعیت کیف پول :
                <select @change="getUserFavFiatWallet()" v-model="methodsWallet" class="input-form w-100 mt-1 px-1"
                    name="" id="">
                    <option value="new">
                        کیف پول جدید
                    </option>
                    <option value="exist">
                        استفاده از کیف پولهای محبوب
                    </option>
                </select>
            </label>
        </div>
        <div v-if="methodsWallet === 'exist'" class="d-flex mb-3">
            <label class="w-100 font-weight-bold">
                کیف پول مقصد : ({{$route.query.currency}})
                <select v-model="selectedFavWallet" class="input-form w-100 mt-1 px-1" name="" id="">
                    <option value="">
                        یک آدرس کیف پول انتخاب نمایید...
                    </option>
                    <option v-for="(address, i) in userFavFiatWallet" v-if="$route.query.currency === address.symbol"
                        :key="i" :value="address">
                        {{ address.label }} - ({{ address.address }})
                    </option>
                </select>
            </label>
        </div>

        <div v-if="methodsWallet === 'new'" class="d-flex mb-3">
            <label class="w-100 font-weight-bold">
                انتخاب شبکه انتقال : ({{$route.query.currency}})
                <select v-model="selectedNetwork" class="input-form w-100 mt-1 px-1" name="" id="">
                    <option value="">
                        یک شبکه انتقال انتخاب نمایید...
                    </option>
                    <option v-for="(network, i) in currencyNetWork" :key="i" :value="network">
                        {{ network.network }} (فی شبکه : {{ $toFarsiNum(network.withdraw_fee) }})
                    </option>
                </select>
            </label>
        </div>
        <label v-if="methodsWallet === 'new'" class="w-100 mb-3 font-weight-bold">
            آدرس کیف پول :
            <input v-model="userAddress" class="input-form w-100 mt-1" type="text" />
        </label>
        <label v-if="methodsWallet === 'new' && selectedNetwork.has_tag == 1" class="w-100 mb-3 font-weight-bold">
            تگ کیف پول :
            <input v-model="tag" class="input-form w-100 mt-1" type="text" />
        </label>
        <label class="w-100 mb-3 font-weight-bold">
            مقدار برداشتی :
            <input v-model="amount" class="input-form w-100 mt-1" type="text" />
        </label>
        <verification-code-get @sendCode="setCode($event)"></verification-code-get>
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
            userAddress: '',
            amount: '',
            methodsWallet: 'new',
            selectedFavWallet: '',
            selectedNetwork: '',
            tag: ''
        }
    },
    computed: {
        userFavFiatWallet() {
            return this.$store.state.wallet.userFavFiatWallet
        },
        currencyNetWork() {
            return this.$store.state.currency.currencyNetWork
        },
    },
    async mounted() {
        let res = await this.$store.dispatch('currency/getCurrencyNetWork', this.$route.query.currency.toUpperCase())
        if (!JSON.parse(res.ok))
            this.$router.push('/dashboard')
    },
    methods: {
        setCode(data) {
            this.codeInfo = data
        },
        async getUserFavFiatWallet() {
            if (this.userFavFiatWallet.length === 0 && this.methodsWallet === 'exist')
                await this.$store.dispatch('wallet/getUserFavFiatWallet')
        },
        async submitFiatWithdraw() {
            let wallet = this.methodsWallet === 'new' ? this.userAddress : this.selectedFavWallet.address
            let tag = this.methodsWallet === 'new' ? this.tag : this.selectedFavWallet.address_tag
            let network = this.methodsWallet === 'new' ? this.selectedNetwork.network : this.selectedFavWallet.network

            if (this.codeInfo.token === '') {
                this.$fire({
                    title: "درخواست ارسال کد!",
                    text: 'لطفا درخواست ارسال کد ۴ رقمی را بدهید...',
                    type: "warning",
                    timer: 10000
                });
                return false
            }
            if (wallet === '' || this.amount.trim() === '' || this.codeInfo.code.trim() === '' || network === undefined || wallet === undefined) {
                this.$fire({
                    title: "فیلد خالی!",
                    text: 'لطفا تمامی فیلدهای ضروری را پر نمایید...',
                    type: "warning",
                    timer: 10000
                });
                return false
            }

            this.loading = true
            let res = await this.$store.dispatch('transaction/addUserCurrencyTransactionWithdraw', { code: this.codeInfo.code, token: this.codeInfo.token, address: wallet, amount: this.amount, symbol: this.$route.query.currency.toUpperCase(), network: network, tag: tag })
            if (JSON.parse(res.ok) === true) {
                this.$fire({
                    title: "عملیات موفق",
                    text: "برداشت از کیف پول شما با موفقیت انجام گردید...",
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
label {
    .more {
        font-size: 11px;
        color: $black-300;
    }
}
</style>