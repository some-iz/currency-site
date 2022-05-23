<template>
  <header class="w-100 pt-1 sticky-top">
    <section class="container ">
      <section class="mt-1 d-flex align-items-center justify-content-between">
        <logo-img></logo-img>
        <div class="d-flex align-items-center">
          <item-header class="ml-3" url="tel:051437173563">
            {{ $toFarsiNum('051-437173563') }}
            <b-icon-telephone-plus-fill class="mr-1"></b-icon-telephone-plus-fill>
          </item-header>
          <btn base="nuxtLink" url="/login" size="small" class="px-3 px-sm-4">
             ورود / ثبت نام
          </btn>
        </div>
      </section>
      <section class="bottom-sec mt-2 px-1 w-100 d-flex align-items-center justify-content-between">
        <main-nav></main-nav>
        <div class="d-flex">
            <item-header class="ml-3" url="tel:051437173563">
                <b-icon-download></b-icon-download>
            </item-header>
            <item-header class="ml-3" url="tel:051437173563">
                <b-icon-headset></b-icon-headset>
            </item-header>
            <item-header url="tel:051437173563">
                <b-icon-translate></b-icon-translate>
            </item-header>
        </div>
      </section>
    </section>
  </header>
</template>

<script>
  import Btn from '../widget/btn.vue'
  import ItemHeader from '../widget/itemHeader.vue'
  import logoImg from '../widget/logoImg.vue'
  import MainNav from '../widget/mainNav.vue'
  export default {
    components: {
      logoImg,
      Btn,
      MainNav,
      ItemHeader
    },
  }
</script>

<style lang="scss" scoped>
header{
  background: $white-full;
  box-shadow: 0 0 15px $black-100;
  .bottom-sec{
      border-top: 2px solid $black-70;
  }
}
</style>