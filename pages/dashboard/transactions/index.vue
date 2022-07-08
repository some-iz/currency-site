<template>
  <section class="container-fluid">
    <customTable
      class="mt-3"
      :loadingTable="loadingUsersList"
      :tableData="data" 
      :tableHeadItems="tableHeadItems" 
      :tableKeyItems="tableKeyItems" 
      :haveRoutePush="true" 
      :indexFarsiItemTable="indexFarsiItemTable" 
      :haveCommaFarsiItemTable="haveCommaFarsiItemTable" 
      :ltrDir="ltrDir" 
      :tableAction="tableAction"
    />
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
      data : [
        {name: "سیبیسب", admin: "سیبسی", action: "/admin-panel/users/", status: "سیبسیب", national_id: "سیبسیبسیب", phone_number: "سیبسبسی"},
        {name: "سیبیسب", admin: "سیبسی", action: "/admin-panel/users/", status: "سیبسیب", national_id: "سیبسیبسیب", phone_number: "سیبسبسی"},
        {name: "سیبیسب", admin: "سیبسی", action: "/admin-panel/users/", status: "سیبسیب", national_id: "سیبسیبسیب", phone_number: "سیبسبسی"},
        {name: "سیبیسب", admin: "سیبسی", action: "/admin-panel/users/", status: "سیبسیب", national_id: "سیبسیبسیب", phone_number: "سیبسبسی"},
        {name: "سیبیسب", admin: "سیبسی", action: "/admin-panel/users/", status: "سیبسیب", national_id: "سیبسیبسیب", phone_number: "سیبسبسی"},
      ],
      tableHeadItems: ['یسبسی', 'سیبسیب', 'سیبیس', 'یسبسیب' , 'سیبسیب'],
      tableKeyItems: ['name'  , 'admin' , 'national_id' , 'phone_number' , 'status'],
      indexFarsiItemTable: [false, false, true, true,false],
      haveCommaFarsiItemTable: [false, false, false, false, false],
      ltrDir: [false, false, true, true , false],
      tableAction: ['action','phone_number'],
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>