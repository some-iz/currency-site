<template>
    <div v-if="!isSubmited" class="w-100 pt-2 order-submit">
        <div class="d-flex justify-content-around align-items-center">
            <div class="d-flex flex-column">
                <p class="text-center">
                    {{ type === 0 ? 'خرید' : 'فروش'}}
                </p>
                <p class="val py-3 px-2 text-center font-weight-bold">
                    {{ $toFarsiNum(topInput.value) }}
                </p>
                <p class="text-center">
                    {{topInput.option.fa_name }}
                </p>
            </div>
            <b-icon class="mx-5 icon mb-2" icon="arrow-left-circle-fill"></b-icon>
            <div class="d-flex flex-column">
                <p class="text-center">با قیمت</p>
                <p class="val py-3 px-2 text-center font-weight-bold">
                    {{ $toFarsiNum(bottomInput.value) }}
                </p>
                <p class="text-center">
                    {{ bottomInput.option.fa_name }}
                </p>
            </div>
        </div>
        <Btn @click="submitOrder()" width="full" size="small" :loading="loading"
            class="mt-3 font-weight-bold rounded d-flex align-items-center justify-content-center">
            <b-icon class="ml-1" icon="check-circle-fill"></b-icon>
            ثبت سفارش {{ type === 0 ? 'خرید' : 'فروش'}}
        </Btn>
    </div>
    <div class="submit-res" v-else>
        <div v-if="orderStatus" class="success text-center">
            <b-icon class="mt-3 mb-3" icon="check-circle-fill"></b-icon>
            <h6 class="font-weight-bold mb-4 pb-1">ثبت سفارش شما با موفقیت انجام گردید.</h6>
            <p class="success-box p-2 d-flex flex-column mb-3">
                شماره پیگیری :
                <span class="mt-1">
                    {{ details }}
                </span>
            </p>
        </div>
        <div v-else class="error text-center">
            <b-icon class="mt-3 mb-3" icon="exclamation-circle-fill"></b-icon>
            <h6 class="font-weight-bold mb-4  pb-1">ثبت سفارش شما ناموفق بود.</h6>
            <p class="error-box p-2 d-flex flex-column mb-3">
                خطا :
                <span class="mt-1">
                    {{ details }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
import Btn from './btn.vue';
export default {
    components: { Btn },
    props: ['type', 'bottomInput', 'topInput', 'currencyList'],
    data() {
        return {
            loading: false,
            isSubmited: false,
            orderStatus: true,
            details: ''
        }
    },
    methods: {
        async submitOrder() {
            let symbol;
            this.currencyList.map((el) => {
                if (el.fa_name === this.topInput.option.fa_name)
                    symbol = el.symbol
            })
            let topInputValue = this.topInput.value.replaceAll(",", "");
            let bottomInputValue = this.bottomInput.value.replaceAll(",", "");
            let method = this.type === 0 ? 'user_order_buy_add' : 'user_order_sell_add'
            this.loading = true
            let res = await this.$store.dispatch('order/addUserOrder', { method: method, price: bottomInputValue, quantity: topInputValue, symbol: symbol })
            if (JSON.parse(res.ok) === true) {
                this.orderStatus = JSON.parse(res.ok)
                this.details = res.data[0].order_number
            } else {
                this.orderStatus = JSON.parse(res.ok)
                this.details = res.error[0].description_details
            }
            this.isSubmited = true
            this.loading = false
        }
    }
}
</script>

<style lang="scss" scoped>
.order-submit{
    font-size: 13px;
    font-weight: 500;
    .val{
        background: $black-50;
        border: 2px solid  $black-20;
        box-shadow: 0 0 10px $black-20;
        min-width: 180px;
        font-size: 15px;
        border-radius: 10px;
    }
    .icon{
        font-size: 35px;
        color: $green-200;
    }
}
.submit-res{
    min-width: 300px;
    width: 400px;
    .success{
        svg{
            color: $success-color;
            font-size: 70px;
        }
        .success-box {
            background: $green-50;
            border: 2px solid $green-50;
            border-radius: 10px;
            font-size: 13px;
        }
    }
    .error{
        svg {
            color: $error-color;
            font-size: 70px;
        }
        .error-box{
            background: $red-50;
            border: 2px solid $red-50;
            border-radius: 10px;
            font-size: 13px;
        }
    }
}
</style>