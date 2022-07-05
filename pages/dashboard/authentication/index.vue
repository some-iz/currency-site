<template>
  <section class="container-fluid m-0">
    <WizardStep class="mt-3" :steps="steps"></WizardStep>
    <div class="personal-info row mt-5 px-4">
      <div class="col-7">
        <div class="d-flex">
          <label class="w-100 mb-4 font-weight-bold ml-2">
            نام :
            <input class="input-form w-100 mt-1" type="text" />
          </label>
          <label class="w-100 mb-4 font-weight-bold">
            نام خانوادگی :
            <input class="input-form w-100 mt-1" type="text" />
          </label>
        </div>
        <label class="w-100 mb-4 font-weight-bold">
          نام پدر :
          <input class="input-form w-100 mt-1" type="text" />
        </label>
        <label class="w-100 mb-4 font-weight-bold">
          کد ملی :
          <input class="input-form w-100 mt-1" type="text" />
        </label>
        <label class="w-100 mb-4 font-weight-bold">
          تاریخ تولد :
          <date-picker v-model="date" class="mt-1" placeholder="برای انتخاب کلیک نمایید." :modal="true" locale="fa" color="gray" :column="1" :autoSubmit="false" mode="single" input-format="jYYYY/jMM/jDD" format="jYYYY/jMM/jDD" displayFormat="jYYYY/jMM/jDD"/>
        </label>
        <Btn class="mt-3 py-2 rounded font-weight-bold" width="full" size="small">ثبت مشخصات</Btn>
      </div>
      <div class="img-info col-5 px-4 d-flex align-items-center justify-content-center">
        <img loading="lazy" class="img-fluid" src="/img/auth/preview.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import WizardStep from '~/components/widget/wizardStep.vue'
import Btn from '../../../components/widget/btn.vue'
export default {
  layout: 'dashboard',
  components: { WizardStep, Btn },
  props: [],
  data() {
    return {
      steps: [
        { title: 'اطلاعات' , icon: 'person-fill'},
        { title: 'اطلاعات' , icon: 'person-fill'},
        { title: 'اطلاعات' , icon: 'person-fill'},
        { title: 'اطلاعات' , icon: 'person-fill'},
      ],
      date: null
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.personal-info{
  >div{
    label{
      font-size: 13px;
      color: $black-600;
    }
  }
  .img-info{
    img{
      max-width: 450px;
      width: 100%;
    }
  }
}
</style>