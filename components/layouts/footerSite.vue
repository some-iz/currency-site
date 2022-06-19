<template>
  <footer class="w-100">
    <bottom-wave></bottom-wave>
    <section class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-4 mb-md-0 brand-info">
            <logo-img class=""></logo-img>
            <p class="mt-2">
               شرکت دانش بنیان توفاد (توسعه فن آوری آرین داده پیوسته ایرانیان) متشکل از متخصصان و افراد خبره در زمینه بلاک چین و رمز ارزها مشغول به فعالیت می‌باشد.
            </p>
            <div class="icon-sec d-flex">
              <a href="">
                <img src="/img/social/5.png" alt="">
              </a>
              <a href="">
                <img src="/img/social/6.png" alt="">
              </a>
              <a href="">
                <img src="/img/social/1.png" alt="">
              </a>
              <a href="">
                <img src="/img/social/7.png" alt="">
              </a>
            </div>
          </div>
          <list-menu v-for="i in 2" :key="i" class="col-md-3">
            دسترسی سریع
          </list-menu>
        </div>
        <div class="row copyright py-1 mt-5">
          <div class="col-12 py-2 d-flex justify-content-between">
            © ربیت - سرویس کیف پول اختصاصی رمز ارز ایران
            <span>
              طراحی و توسعه :
              <a href="#">
                فناوری اطلاعات آوید
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
import bottomWave from '../widget/bottomWave.vue'
import LogoImg from '../widget/logoImg.vue'
import ListMenu from '../widget/listMenu.vue'
  export default {
  components: { bottomWave, LogoImg, ListMenu },

  }
</script>

<style lang="scss" scoped>
.main-footer{
  background: $black-20;
  .brand-info{
    p{
      font-size: 13.5px;
      font-weight: 500;
    }
    .icon-sec{
      gap: 5px;
      img{
        width: 50px;
        transition: .3s;
      }
      img:hover{
        transform: translateY(-5px);
      }
    }
  }
  .copyright{
    border-top: 2px solid $black-100;
    font-weight: bold;
    font-size: 13px;
    color: $black-350;
  }
}
</style>