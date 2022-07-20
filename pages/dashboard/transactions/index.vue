<template>
  <section class="container-fluid">
    <tabbar :tabItems="['1' , '1']"></tabbar>
    <customTable  class="mt-3"
      :loadingTable="loadingTransaction" 
      :tableData="userFiatTransaction" 
      :tableHeadItems="tableHeadItems"
      :tableKeyItems="tableKeyItems"
      :indexFarsiItemTable="indexFarsiItemTable"
      :haveCommaFarsiItemTable="haveCommaFarsiItemTable" 
      :ltrDir="ltrDir" :tableAction="tableAction" ></customTable>
  </section>
</template>

<script>
import CustomTable from '~/components/widget/customTable.vue'
import Tabbar from '~/components/widget/tabbar.vue'
export default {
  layout: 'dashboard',
  components: { CustomTable, Tabbar },
  props: [],
  data() {
    return {
      loadingTransaction: true,
      tableHeadItems: ['شماره پیگیری', 'نوع', 'مقدار', 'ارز', 'تاریخ', 'توضیحات' , 'وضعیت'],
      tableKeyItems: ['transaction_token', 'transaction_fa_type', 'amount', 'symbol', 'shamsi_date','description' , 'status'],
      indexFarsiItemTable: [false, false, true, false, true, false, false],
      haveCommaFarsiItemTable: [false, false, false, false, false, false, false, false],
      ltrDir: [false, false, false, false, true, false, false],
    }
  },
  async mounted() {
    await this.$store.dispatch('transaction/getUserFiatTransaction')
    this.loadingTransaction = false
  },
  computed: {
    userFiatTransaction() {
      return this.$store.state.transaction.userFiatTransaction
    }
  },
}
</script>

<style lang="scss" scoped>
</style>