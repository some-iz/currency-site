<template>
  <section class="fast-signup">
    <div class="container">
      <div class="row align-items-center">
        <div class="box-signup col-md-7 mt-4 pt-2 pt-md-0 mt-md-0 mb-3 mb-md-0">
            <h1 class="heading font-weight-bold d-flex flex-column">
                صرافی ربیت
                <span class="mt-2 pt-1">
                     بازار خرید و فروش ارزهای دیجیتال
                </span>
            </h1>
            <div class="get-number d-flex mt-4">
                <input type="text" placeholder="شماره موبایل خود را وارد نمایید" class="input-form font-weight-bold"/>
                <Btn class="rounded mr-1 px-2 d-flex align-items-center font-weight-bold" size="small">
                    شروع کنید
                </Btn>
            </div>
            <span class="help-text d-flex font-weight-bold mt-2 pt-1">
                <b-icon-gem class="ml-1"></b-icon-gem>
                از معامله آسان ارزهای دیجیتال در بازارهای تومان و دلار تتر با قیمت واقعی، بدون محدودیت و نیاز به واسطه لذت ببرید. 
            </span>
        </div>
        <div class="img-signup col-md-5">
            <img draggable="false" class="img-fluid px-4 px-md-0" src="/img/login/login.svg" alt="">
            <bg-cover></bg-cover>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BgCover from './bgCover.vue';
import Btn from './btn.vue';
  export default {
    components: { Btn, BgCover }
}
</script>

<style lang="scss" scoped>
.fast-signup{
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  .box-signup{
    .heading{
        color: $black-800;
        span{
            color: $black-300;
            font-size: 20px;
        }
    }  
    .get-number{
        input{
            min-width: 300px;
            background: $second-color;
            border: 2px solid $black-100;
            @media screen and (max-width: 420px) {
                min-width: 200px; 
            }
        }
        button{
            white-space: nowrap;
            box-shadow: 0 0 15px $black-200;
        }
    }
    .help-text{
        font-size: 13px;
        max-width: 450px;
        align-items: center;
        color: $black-250;
        svg{
            font-size: 30px;
            color: $black-200;
        }
    }
  }
  .img-signup{
    position: relative;
  }
}
</style>