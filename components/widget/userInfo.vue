<template>
    <div class="personal-info row mt-4 pt-2 pt-md-0 mt-md-5 px-0 px-md-2 px-lg-4">
        <div class="col-md-7">
            <div class="d-flex mb-3">
                <label class="w-100 font-weight-bold ml-2">
                    نام :
                    <input class="input-form w-100 mt-1" type="text" />
                </label>
                <label class="w-100 font-weight-bold">
                    نام خانوادگی :
                    <input class="input-form w-100 mt-1" type="text" />
                </label>
            </div>
            <label class="w-100 mb-3 font-weight-bold">
                نام پدر :
                <input class="input-form w-100 mt-1" type="text" />
            </label>
            <label class="w-100 mb-3 font-weight-bold">
                کد ملی :
                <input class="input-form w-100 mt-1" type="text" />
            </label>
            <div class="w-100 mb-1 font-weight-bold">
                <span class="mb-1 d-block">
                    تاریخ تولد :
                </span>
                <client-only>
                    <date-picker v-model="date" simple placeholder="برای انتخاب کلیک نمایید." locale="fa"
                        color="gray" />
                </client-only>
            </div>
            <Btn class="mt-4 py-2 rounded font-weight-bold" width="full" size="small">ثبت مشخصات</Btn>
        </div>
        <div class="img-info col-md-5 px-2 px-md-4 d-flex flex-column align-items-center justify-content-center">
            <span class="status-info mt-4 mt-md-0 d-flex align-items-center justify-content-center font-weight-bold w-100 py-2 rounded px-2 nt-1">
                <b-icon class="ml-1" icon="file-earmark-plus"></b-icon>
                در انتظار ثبت اطلاعات...
            </span>
            <img draggable="false" loading="lazy" class="img-fluid" src="/img/auth/preview.png" alt="">
        </div>
    </div>
</template>

<script>
import Btn from '~/components/widget/btn.vue'
export default {
    layout: 'dashboard',
    components: {
        Btn,
        DatePicker: () => import('vue-persian-datetime-picker'),
    },
    props: [],
    data() {
        return {
            date: null
        }
    },
}
</script>

<style lang="scss" scoped>
.personal-info{
  >div{
    label , div{
      font-size: 13px;
      color: $black-600;
    }
  }
  .img-info{
    img{
      max-width: 440px;
      width: 100%;
    }
    .status-info{
      background: $red-50;
      border: 2px solid $red-100;
      font-size: 14px;
      color: $black-600;
      svg{
        font-size: 20px;
      }
    }
  }
}
</style>