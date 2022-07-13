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
        <user-info-img width="col-md-5" :status="1" title="در انتظار ثبت اطلاعات..." imgSrc="/img/auth/preview.png" imgAlt="info"></user-info-img>
    </div>
</template>

<script>
import Btn from '~/components/widget/btn.vue'
import UserInfoImg from './userInfoImg.vue'
export default {
    layout: 'dashboard',
    components: {
        Btn,
        DatePicker: () => import('vue-persian-datetime-picker'),
        UserInfoImg,
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
    div{
      font-size: 13px;
      color: $black-600;
    }
  }
}
</style>