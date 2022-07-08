<template>
  <section class="dropdown-body w-100">
    <div class="dropdown-head font-weight-bold d-flex align-items-center justify-content-between py-3 px-2 mb-2">
      کیف پول شما :
      <span class="ml-1">
        ۲۰ ارز
      </span>
    </div>
    <div v-for="i in 3" :key="i" class="dropdown mb-2">
      <div @click="activeDropdown === i ? activeDropdown = 0 : activeDropdown = i"
        class="item-dropdown d-flex align-items-center justify-content-between py-2 px-2">
        <currency-show :isSecondBg="true" faName="بیت کوین"
          imgSrc="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/45_Bitcoin_logo_logos-512.png"
          symbol="BTC"></currency-show>
        <div class="info">
          موجودی :
          ۲۲۲۲۲
        </div>
        <div class="info">
          موجودی :
          ۲۲۲۲۲
        </div>
        <b-icon icon="caret-down-fill"></b-icon>
      </div>
      <transition name="slide-fade">
        <div v-if="activeDropdown === i" class="collapse-dropdown py-3 px-2 bg-warning">
          <div v-for="i in 3" :key="i" class="item-collapse-dropdown text-center">
            <btn class="px-4 py-2" size="small">واریز</btn>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import CurrencyShow from '~/components/widget/currencyShow.vue'
import Btn from './btn.vue';
export default {
  props: [
    "title",
    "counterTitle",
    "dropdownData",
  ],
  components: { Btn,CurrencyShow },
  data() {
    return {
      activeDropdown: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
.dropdown-body{
  .dropdown-head{
    background: $default-color;
    border-radius: 6px;
    color: $white-full;
    span{
      font-size: 14px;
    }
  }
  .dropdown{
    background: $black-70 !important;
    border-radius: 6px;
    .item-dropdown{
      background: $primary-color;
      border-radius: 6px;
      cursor: pointer;
      .info{
        font-size: 14px;
        font-weight: 500;
      }
    }
    .collapse-dropdown{
      background: transparent !important;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 5px;
      row-gap: 10px;
      .item-collapse-dropdown{
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all .3s;
}
.slide-fade-leave-active {
  transition: all .3s;
}
.slide-fade-enter, .slide-fade-leave-to, .slide-fade-leave-active {
  transform: translateX(-40px);
  opacity: 0;
}
</style>