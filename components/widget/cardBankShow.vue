<template>
    <div class="w-100">
        <div v-for="(address , i) in bankAddress" :key="i" class="bank-address p-2 mb-2">
            <div class="d-flex mb-1 justify-content-between align-items-center">
                <span class="info">
                    <span>
                        {{ $toFarsiNum(i+1 , true) }}-
                    </span>
                    {{ address.bank_name }}
                </span>
                <btn :loading="loading" :loadingCount="1" @click="deleteAddress(address.id)" class="pb-1 pt-0 px-1 rounded" size="small">
                    <b-icon icon="trash"></b-icon>
                </btn>
            </div>
            <div class="d-flex mb-1 justify-content-between align-items-center">
                <span class="text">
                    کارت :
                </span>
                <span class="info">
                    {{ address.card_number }}
                </span>
            </div>
            <div class="d-flex mb-1  justify-content-between align-items-center">
                <span class="text">
                    شبا :
                </span>
                <span class="info">
                    IR-{{ address.shaba_number }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import btn from './btn.vue'
export default {
    components: { btn, },
    props: ['bankAddress'],
    data() {
        return {
            loading: false
        }
    },
    methods: {
        async deleteAddress(id) {
            this.loading = true
            let res = await this.$store.dispatch('address/deleteBankAddress', id)
            if (JSON.parse(res.ok) === true) {
                this.$fire({
                    title: "عملیات موفق",
                    text: "مشخصات حساب شما با موفقیت حذف گردید...",
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
.bank-address {
    background: $black-50;
    border: 2px solid $black-50;
    border-radius: 6px;
    .info,.text {
        font-size: 14px;
        font-weight: 500;
        color: $black-600;
    }
    .info {
        font-weight: bold;
    }
}
</style>