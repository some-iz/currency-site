<template>
  <section class="container-fluid m-0">
    <WizardStep class="mt-3" :steps="steps" @getActiveTab="getActiveTab($event)"></WizardStep>
    <UserInfo v-if="activeTab === 0" class="tab"></UserInfo>
    <user-address v-else-if="activeTab === 1"></user-address>
    <UserNationalCard v-else-if="activeTab === 2" class="tab"></UserNationalCard>
    <UserSelfie v-else-if="activeTab === 3"></UserSelfie>
  </section>
</template>

<script>
import WizardStep from '~/components/widget/wizardStep.vue'
import UserInfo from '~/components/widget/userInfo.vue'
import UserNationalCard from '../../../components/widget/userNationalCard.vue'
import UserAddress from '~/components/widget/userAddress.vue'
import UserSelfie from '~/components/widget/userSelfie.vue'
export default {
  layout: 'dashboard',
  components: {
    WizardStep,
    UserInfo,
    UserNationalCard,
    UserAddress,
    UserSelfie
},
  props: [],
  data() {
    return {
      steps: [
        { title: 'اطلاعات' , icon: 'person-fill'},
        { title: 'آدرس', icon: 'geo-alt-fill'},
        { title: 'کارت ملی', icon: 'file-earmark-person-fill'},
        { title: 'سلفی', icon: 'person-badge'},
      ],
      activeTab: 0
    }
  },
  methods: {
    getActiveTab(i) {
      this.activeTab = i
    }
  }
}
</script>

<style lang="scss" scoped>
</style>