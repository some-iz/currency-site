<template>
  <div class="container-fluid">
    <div class="row mx-auto mt-3">
      <div class="col-md-7 px-0 px-md-2">
        <!-- <label class="w-100 mb-3 font-weight-bold">
            شماره کارت شما :
            <input class="input-form w-100 mt-1" type="text" />
        </label> -->
        <label class="w-100 mb-3 font-weight-bold">
            مبلغ واریزی :
            <input class="input-form w-100 mt-1" type="text" />
        </label>
        <Btn class="mt-3 py-2 rounded font-weight-bold" width="full" size="small">
          اتصال به درگاه پرداخت
        </Btn>
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
.switcher{
  background: $green-70;
  font-size: 13px;
  font-weight: bold;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  .active{
    background: $success-color;
    color: $white-full;
  }
}
.card-info{
  background: $black-50;
  border: 2px solid $black-20;
  border-radius: 7px;
  font-size: 12.5px;
  font-weight: 500;
  color: $black-650;
  span{
    font-size: 13px;
    font-weight: bold;
  }
}
</style>