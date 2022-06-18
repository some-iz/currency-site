<template>
  <footer class="w-100">
    <bottom-wave></bottom-wave>
    <section class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <logo-img></logo-img>
            <p>
               شرکت دانش بنیان توفاد (توسعه فن آوری آرین داده پیوسته ایرانیان) متشکل از متخصصان و افراد خبره در زمینه بلاک چین و رمز ارزها مشغول به فعالیت می‌باشد.
            </p>
          </div>
          <div class="col-md-3">
            <h4>
              دسترسی سریع
            </h4>
            <ul>
              <li v-for="i in 5" :key="i">
                <nuxt-link to="/">
                  zcsdfsdf
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>
              دسترسی سریع
            </h4>
            <ul>
              <li v-for="i in 5" :key="i">
                <nuxt-link to="/">
                  zcsdfsdf
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
import bottomWave from '../widget/bottomWave.vue'
import LogoImg from '../widget/logoImg.vue'
  export default {
  components: { bottomWave, LogoImg },

  }
</script>

<style lang="scss" scoped>
.main-footer{
  background: $black-20
}
</style>