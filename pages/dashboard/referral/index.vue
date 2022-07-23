<template>
  <section class="d-referral">
    <div>
      <create-referral></create-referral>
      <statistics-referral></statistics-referral>
    </div>
    <referral-table></referral-table>
  </section>
</template>

<script>
import Vue from "vue";
import VueClipboard from 'vue-clipboard2'
import CreateReferral from '~/components/widget/createReferral.vue';
import StatisticsReferral from '~/components/widget/statisticsReferral.vue';
import ReferralTable from "~/components/widget/referralTable.vue";
Vue.use(VueClipboard)

export default {
  name: 'd-referral',
  layout: 'dashboard',
  components: {
    CreateReferral,
    StatisticsReferral,
    ReferralTable
},
  props: [],
  data() {
    return {
      loading: false,
      percentage: 30,
      idTextCopy: false,
      linkTextCopy: false,
      userReferral: [],
      baseUrl: '',
      allStatistics: {
        number: 0,
        trade: 0,
        tradePercentage: 0
      },
    }
  },
  async mounted() {
    // await this.getUserReferral()
  },
  methods: {
    
    copyText(id) {
      if (id === 1)
        this.idTextCopy = true
      else if (id === 2)
        this.linkTextCopy = true
      else {
        this.$fire({
          title: "کپی شد...",
          text: "لینک دعوت شما با موفقیت کپی شد...",
          type: "success",
          timer: 1300
        });
      }
      setTimeout(() => {
        this.linkTextCopy = false
        this.idTextCopy = false
      }, 2000)
    },
    
  }
}
</script>

<style lang="scss" scoped>
.d-referral {
  padding: 0 10px;
  margin-top: 10px;
  >div:first-child{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 10px;
    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
      row-gap: 15px;
      padding: 0 2px;
    }
  }
}
</style>