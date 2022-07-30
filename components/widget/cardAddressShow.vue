<template>
    <div class="w-100">
        <h5 class="font-weight-bold">لیست کیف پول های شما :</h5>
        <div v-for="(wallet,i) in userFavFiatWallet" :key="i" class="wallet-address px-2 py-2 mb-2">
            <div class="d-flex mb-2 justify-content-between align-items-center">
                <span class="info ml-3">
                    <span>
                        {{ $toFarsiNum(i+1 , true)}}-
                    </span>
                    {{ wallet.label }}
                </span>
                <btn :loading="loading" :loadingCount="1" @click="deleteAddress(wallet.id)" class="pb-1 pt-0 px-1 rounded" size="small">
                    <b-icon icon="trash"></b-icon>
                </btn>
            </div>
            <div class="d-flex mb-2 justify-content-between align-items-center">
                <span class="text ml-3">
                    آدرس :
                </span>
                <span class="info">
                    {{ wallet.address }}
                </span>
            </div>
            <div v-if="wallet.address_tag !== ''" class="d-flex mb-2 justify-content-between align-items-center">
                <span class="text ml-3">
                    تگ کیف پول :
                </span>
                <span class="info">
                    {{ wallet.address_tag }}
                </span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <span class="text ml-3">
                    شبکه ارز {{ wallet.symbol }} :
                </span>
                <span class="info">
                    {{ wallet.network }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import btn from './btn.vue'
export default {
  components: { btn },
    props: ['userFavFiatWallet'],
    data() {
        return {
            loading: false
        }
    },
    methods: {
        async deleteAddress(id) {
            this.loading = true
            let res = await this.$store.dispatch('wallet/deleteUserFavFiatWallet', id)
            if (JSON.parse(res.ok) === true) {
                this.$fire({
                    title: "عملیات موفق",
                    text: "آدرس کیف پول شما با موفقیت حذف گردید...",
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
.wallet-address{
  background: $black-20;
  border: 2px solid $black-50;
  border-radius: 6px;
  .info,.text{
    font-size: 13px;
    font-weight: 500;
    color: $black-600;
  }
  .info{
    font-weight: bold;
    overflow-wrap: anywhere;

  }
}

</style>