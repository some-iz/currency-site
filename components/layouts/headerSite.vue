<template>
  <header class="w-100 pt-1 sticky-top">
    <section class="container">
      <section class="mt-1 d-flex align-items-center justify-content-between">
        <logo-img></logo-img>
        <div class="d-flex align-items-center">
          <div class="d-none d-sm-block">
            <item-header class="ml-3" url="tel:051437173563">
              <span>{{ $toFarsiNum('051-437173563') }}</span>
              <b-icon-telephone-plus-fill class="mr-1"></b-icon-telephone-plus-fill>
            </item-header>
          </div>
          <btn @click="showModal = true" size="small" class="px-3 login-btn px-sm-4">
             ورود / ثبت نام
          </btn>
          <custom-modal title="ورود / ثبت نام" :showModal="showModal" @closeModal="showModal = false">
            <login-site></login-site>
          </custom-modal>
        </div>
      </section>
      <section class="bottom-sec mt-2 px-1 w-100 d-flex align-items-center justify-content-between">
        <div :class="[toggleNav ? 'active' : '','nav-parent d-none d-lg-block']">
          <div>
            
          </div>
          <main-nav></main-nav>
        </div>
        <b-icon-list @click="toggleNav = toggleNav" class="d-block d-lg-none nav-btn"></b-icon-list>
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
import CustomModal from '../widget/customModal.vue'
import Login from '../widget/login.vue'
import LoginSite from './loginSite.vue'
  export default {
    components: {
      logoImg,
      Btn,
      MainNav,
      ItemHeader,
      CustomModal,
      Login,
      LoginSite
    },
    data() {
      return {
        showModal: false,
        toggleNav: false
      }
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
  .login-btn{
    white-space: nowrap;
  }
  .nav-btn{
    font-size: 25px;
    cursor: pointer;
    color: $black-700;
    margin: 10px 0;
  }
  .nav-parent{
    @media screen and (max-width : 960px) {
      background: blue;
      transition: .5s;
      display:  block !important;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      transform: translateX(100%);
      opacity: 0;
    }
  }
  .nav-parent.active{
    transform: translateX(0);
    opacity: 1;
  }
}
</style>