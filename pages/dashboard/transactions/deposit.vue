<template>
  <div class="container-fluid">
    <div class="row mx-auto mt-3">
      <div class="col-md-7 px-0 px-md-2">
        
        <div class="d-flex mb-3">
            <label class="w-100 font-weight-bold">
                حساب مبدا :
                <select class="input-form w-100 mt-1 px-1" name="" id="">
                    <option value="">حساب یک</option>
                </select>
            </label>
        </div>
        <label class="w-100 mb-3 font-weight-bold">
            شماره کارتی که با آن واریز :
            <input class="input-form w-100 mt-1" type="text" />
        </label>
        <label class="w-100 mb-3 font-weight-bold">
            مبلغ واریزی :
            <input class="input-form w-100 mt-1" type="text" />
        </label>
        <!-- <label class="w-100 mb-3 font-weight-bold">
            کد تایید پیامکی :
            <span class="d-flex align-items-center code-request">
              <input class="input-form w-100" type="text" />
              <Btn class="px-2 rounded font-weight-bold" size="small">ارسال کد</Btn>
            </span>
        </label> -->
        <label class="w-100 mb-3 font-weight-bold">
            شماره پیگیری تراکنش : 
            <input class="input-form w-100 mt-1" type="text" />
            
        </label>
        <Btn class="mt-4 py-2 rounded font-weight-bold" width="full" size="small">ثبت درخواست برداشت</Btn>
      </div>
      <user-info-img width="col-md-5" :status="1" title="واریز به حساب کاربری" imgSrc="/img/transaction/deposit.png" imgAlt="info"></user-info-img>
    </div>
  </div>
</template>

<script>
import Btn from '~/components/widget/btn.vue'
import userInfoImg from '~/components/widget/userInfoImg.vue'
export default {
  components: { userInfoImg, Btn },
  layout: 'dashboard',
}
</script>

<style lang="scss" scoped>

</style>