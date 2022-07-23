<template>
    <div class="w-100">
        <h5 class="font-weight-bold">
            کارت های بانکی شما :
        </h5>
        <card-bank-show :bankAddress="bankAddress"></card-bank-show>
    </div>
</template>

<script>
import CardBankShow from './cardBankShow.vue'
export default {
    components: { CardBankShow },
    computed: {
        bankAddress() {
            return this.$store.state.address.bankAddress
        }
    },
    async mounted() {
        if (this.bankAddress.length === 0)
            await this.$store.dispatch('address/getBankAddress')
    }
}
</script>

<style lang="scss" scoped>

</style>