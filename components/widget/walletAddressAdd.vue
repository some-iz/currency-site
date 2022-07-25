<template>
    <div class="w-100">
        <div class="d-flex">
            <label class="w-100 font-weight-bold ml-2">
                کیف پول خود را انتخاب نمایید :
                <select v-model="walletInfo.symbol" @change="getCurrencyNetWork()" class="input-form w-100 mt-1 px-1"
                    name="" id="">
                    <option selected value="">
                        یک ارز انتخاب نمایید...
                    </option>
                    <option v-for="(currency, i) in currencyList" :key="i" :value="currency.symbol">
                        {{ currency.fa_name }} ({{ currency.symbol }})
                    </option>
                </select>
            </label>
            <label class="w-100 font-weight-bold">
                انتخاب شبکه انتقال ارز :
                <select v-model="walletInfo.network" class="input-form w-100 mt-1 px-1" name="" id="">
                    <option selected value="">
                        یک شبکه انتقال انتخاب نمایید...
                    </option>
                    <option v-for="(network, i) in currencyNetWork" :key="i" :value="network">
                        {{ network.network }}
                    </option>
                </select>
            </label>
        </div>
        <label v-if="walletInfo.network !== ''" class="fee w-100 font-weight-bold">
            <span>
                فی برداشت این شبکه :
                <span>
                    {{ Number(walletInfo.network.withdraw_fee).toLocaleString('fa' ,{minimumFractionDigits:
                    0,maximumFractionDigits: 10,}) }}
                </span>
            </span>
        </label>
        <label class="w-100 mb-3 mt-2 font-weight-bold">
            عنوان انتخابی برای آدرس کیف پول :
            <input v-model="walletInfo.label" class="input-form w-100 mt-1" type="text" />
        </label>
        <label class="w-100 mb-3 font-weight-bold">
            آدرس کیف پول خود را وارد نمایید :
            <input v-model="walletInfo.address" class="input-form w-100 mt-1" type="text" />
        </label>
        <label v-if="walletInfo.network.has_tag == 1" class="w-100 mb-3 font-weight-bold">
            تگ کیف پول خود را وارد نمایید :
            <input v-model="walletInfo.tag" class="input-form w-100 mt-1" type="text" />
        </label>
        <Btn :loading="loading" @click="addNewWallet()" class="mt-4 py-2 rounded font-weight-bold" width="full" size="small">ثبت آدرس کیف
            پول</Btn>
    </div>
</template>

<script>
import Btn from './btn.vue'
export default {
    components: { Btn },
    props: ['currencyList'],
    data() {
        return {
            walletInfo: {
                symbol: '',
                network: '',
                tag: '',
                label: '',
                address: ''
            },
            loading: false
        }
    },
    computed: {
        currencyNetWork() {
            return this.$store.state.currency.currencyNetWork
        },
    },
    methods: {
        async getCurrencyNetWork() {
            this.walletInfo.network = ''
            await this.$store.dispatch('currency/getCurrencyNetWork', this.walletInfo.symbol)
        },
        async addNewWallet() {
            this.loading = true
            let res = await this.$store.dispatch('wallet/addUserFavFiatWallet', this.walletInfo)
            if (JSON.parse(res.ok) === true) {
                this.$fire({
                    title: "عملیات موفق",
                    text: "اطلاعات کیف پول شما با موفقیت ثبت گردید...",
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

.fee{
    font-size: 12px;
    opacity: .7;
}
</style>