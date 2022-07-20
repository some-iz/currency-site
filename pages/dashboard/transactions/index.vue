<template>
  <section class="container-fluid">
    <tabbar @sendActiveTab="sendActiveTab($event)" class="mt-3" theme="primary" :tabItems="['تراکنشات ریالی' , 'تراکنشات ارزی']"></tabbar>
    <customTable  class="mt-2"
      :loadingTable="loadingTransaction" 
      tableHeadTitle="لیست تراکنشات"
      tableHeadCounter="تراکنش"
      :tableData="activeTab === 0 ? userFiatTransaction : userCurrencyTransaction" 
      :tableHeadItems="tableHeadItems"
      :tableKeyItems="tableKeyItems"
      :indexFarsiItemTable="indexFarsiItemTable"
      :haveCommaFarsiItemTable="haveCommaFarsiItemTable" 
      :ltrDir="ltrDir" ></customTable>
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
      activeTab: 0,
      loadingTransaction: true,
      tableHeadItems: ['شماره پیگیری', 'نوع', 'مقدار', 'ارز', 'تاریخ', 'توضیحات' , 'وضعیت'],
      tableKeyItems: ['transaction_token', 'transaction_fa_type', 'amount', 'symbol', 'shamsi_date','description' , 'status'],
      indexFarsiItemTable: [false, false, true, false, true, false, false],
      haveCommaFarsiItemTable: [false, false, false, false, false, false, false, false],
      ltrDir: [false, false, false, false, true, false, false],
    }
  },
  async mounted() {
    if(this.activeTab === 0 && this.userFiatTransaction.length === 0)
      await this.$store.dispatch('transaction/getUserFiatTransaction')
    this.loadingTransaction = false
  },
  computed: {
    userFiatTransaction() {
      return this.$store.state.transaction.userFiatTransaction
    },
    userCurrencyTransaction() {
      return this.$store.state.transaction.userCurrencyTransaction
    }
  },
  methods: {
    async sendActiveTab(i) {
      this.activeTab = i
      this.loadingTransaction = true
      if (this.activeTab === 0 && this.userFiatTransaction.length === 0)
        await this.$store.dispatch('transaction/getUserFiatTransaction')
      else if (this.activeTab === 1 && this.userCurrencyTransaction.length === 0)
        await this.$store.dispatch('transaction/getUserCurrencyTransaction')
      this.loadingTransaction = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>