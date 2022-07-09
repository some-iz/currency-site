<template>
    <div class="personal-info row mt-4 pt-2 pt-md-0 px-0 px-md-2 px-lg-4">
        <div class="col-md-7">
            <div class="d-flex mb-3">
                <label class="w-100 font-weight-bold ml-2">
                    کیف پول خود را انتخاب نمایید :
                    <select class="input-form w-100 mt-1 px-1" name="" id="">
                        <option value=""> یک</option>
                    </select>
                </label>
                <label class="w-100 font-weight-bold">
                    انتخاب شبکه انتقال ارز :
                    <select class="input-form w-100 mt-1 px-1" name="" id="">
                        <option value=""> یک</option>
                    </select>
                </label>
            </div>
            <label class="w-100 mb-3 font-weight-bold">
                عنوان انتخابی برای آدرس کیف پول :
                <input class="input-form w-100 mt-1" type="text" />
            </label>
            <label class="w-100 mb-3 font-weight-bold">
                آدرس کیف پول خود را وارد نمایید :
                <input class="input-form w-100 mt-1" type="text" />
            </label>
            <Btn class="mt-4 py-2 rounded font-weight-bold" width="full" size="small">ثبت آدرس کیف پول</Btn>
        </div>
        <drop-down-wallet class="col-md-5 mx-0"></drop-down-wallet>
        <!-- <user-info-img width="col-md-5" :status="1" title="در انتظار ثبت آدرس..." imgSrc="/img/auth/location.png" imgAlt="address"></user-info-img> -->
    </div>
</template>

<script>
import Btn from '~/components/widget/btn.vue'
import DropDownWallet from '~/components/widget/dropDownWallet.vue'
export default {
  layout: 'dashboard',
  components: {
    Btn,
    DropDownWallet
  },
  props: [],
  data() {
    return {
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
}
</style>