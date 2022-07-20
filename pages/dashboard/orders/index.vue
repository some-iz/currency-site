<template>
  <section class="container-fluid">
    <customTable  class="mt-2"
      :loadingTable="loadingOrders" 
      tableHeadTitle="لیست سفارشات"
      tableHeadCounter="سفارش"
      :tableData="userOrders" 
      :tableHeadItems="tableHeadItems"
      :tableKeyItems="tableKeyItems"
      :indexFarsiItemTable="indexFarsiItemTable"
      :haveCommaFarsiItemTable="haveCommaFarsiItemTable" 
      :ltrDir="ltrDir" ></customTable>
  </section>
</template>

<script>
import CustomTable from '~/components/widget/customTable.vue'
export default {
  layout: 'dashboard',
  components: { CustomTable },
  props: [],
  data() {
    return {
      loadingOrders: true,
      tableHeadItems: ['شماره سفارش', 'ارز', 'سیمبل', 'مقدار', 'قیمت' , 'تاریخ', 'توضیحات' , 'وضعیت'],
      tableKeyItems: ['order_number', 'currencies_fa_name', 'symbol', 'quantity', 'price', 'shamsi_date', 'description' , 'status'],
      indexFarsiItemTable: [false, false, false, true, true, true, false, false],
      haveCommaFarsiItemTable: [false, false, false, false, true, false, false, false, false],
      ltrDir: [false, false, false, false, false, true, false, false],
    }
  },
  async mounted() {
    if (this.userOrders.length === 0)
      await this.$store.dispatch('order/getUserOrders')
    this.loadingOrders = false
  },
  computed: {
    userOrders() {
      return this.$store.state.order.userOrders
    },
  },
}
</script>

<style lang="scss" scoped>
</style>