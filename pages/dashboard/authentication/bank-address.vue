<template>
    <section class="container-fluid">
        <div class="row mt-3 px-3">
            <div class="col-md-7 px-0">
                <card-bank></card-bank>
            </div>
            <div class="col-md-5">
                <card-bank-list></card-bank-list>
            </div>
        </div>
    </section>
</template>

<script>
import cardBank from '~/components/widget/cardBank.vue'
import CardBankList from '~/components/widget/cardBankList.vue'
export default {
  components: { cardBank, CardBankList },
    layout: 'dashboard',
    data() {
        return {        
        }
    },
}
</script>

<style lang="scss" scoped>

</style>