<template>
    <div class="personal-info row mt-4 pt-2 pt-md-0 mt-md-5 px-0 px-md-2 px-lg-4">
        <div class="col-md-7">
            <div class="d-flex mb-3">
                <label class="w-100 font-weight-bold ml-2">
                    استان :
                    <select class="input-form w-100 mt-1 px-1" name="" id="">
                        <option value="">شهر یک</option>
                    </select>
                </label>
                <label class="w-100 font-weight-bold">
                    شهر :
                    <select class="input-form w-100 mt-1 px-1" name="" id="">
                        <option value="">شهر یک</option>
                    </select>
                </label>
            </div>
            <label class="w-100 mb-3 font-weight-bold">
                کدپستی :
                <input class="input-form w-100 mt-1" type="text" />
            </label>
            <label class="w-100 mb-3 font-weight-bold">
                آدرس :
                <textarea class="input-form w-100 mt-1" rows="3"></textarea>
            </label>
            <label class="w-100 mb-3 font-weight-bold">
                شماره تلفن ثابت :
                <input class="input-form w-100 mt-1" type="text" />
            </label>
            <Btn class="mt-4 py-2 rounded font-weight-bold" width="full" size="small">ثبت آدرس</Btn>
        </div>
        <div class="img-info col-md-5 px-2 px-md-4 d-flex flex-column align-items-center justify-content-center">
            <span
                class="status-info mt-4 mt-md-0 d-flex align-items-center justify-content-center font-weight-bold w-100 py-2 rounded px-2 nt-1">
                <b-icon class="ml-1" icon="file-earmark-plus"></b-icon>
                در انتظار ثبت آدرس...
            </span>
            <img draggable="false" loading="lazy" class="img-fluid" src="/img/auth/location.png" alt="">
        </div>
    </div>
</template>

<script>
import Btn from './btn.vue'
export default {
    layout: 'dashboard',
    components: {
    Btn
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