<template>
  <section class="dropdown-body w-100">
    <div v-if="haveHead"
      class="dropdown-head font-weight-bold d-flex align-items-center justify-content-between py-3 px-2 mb-2">
      {{title}} :
      <span class="ml-1">
        ۲۰
        {{counterTitle}}
      </span>
    </div>
    <div v-for="(currency,i) in currencyList" :key="i" class="dropdown mb-2">
      <div @click="activeDropdown === i ? activeDropdown = 0 : activeDropdown = i"
        class="item-dropdown d-flex align-items-center justify-content-between py-2 px-2">
        <currency-show :faName="currency.fa_name" :imgSrc="currency.image" :symbol="currency.symbol">
        </currency-show>
        <div v-if="base === 'primary'" class="info">
          موجودی :
          ۲۲۲۲۲
        </div>
        <div v-if="base === 'primary'" class="info">
          موجودی :
          ۲۲۲۲۲
        </div>
        <b-icon :class="activeDropdown === i ? 'rotate' : ''" icon="caret-down-fill"></b-icon>
      </div>
      <transition name="slide-fade">
        <div v-if="activeDropdown === i" :class="[haveSlot ? '' : 'collapse-dropdown', 'py-3 px-2']">
          <div v-if="!haveSlot" v-for="i in 3" :key="i" class="item-collapse-dropdown text-center">
            <btn class="px-4 py-2" size="small">واریز</btn>
          </div>
          <div v-if="haveSlot">
            <slot></slot>
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
  props: {
    title: {
      type : String,
    },
    counterTitle: {
      type : String,
    },
    dropdownData: {
      type: String,
    },
    base: {
      default: 'primary',
      type : String
    },
    haveHead: {
      default: true,
      type: Boolean
    },
    title: {
      default: 'کیف پول شما',
      type: String
    },
    counterTitle: {
      default: 'ارز',
      type: String
    },
    haveSlot: {
      default: false,
      type: Boolean
    },
    currencyList: {
      default: [],
    }
  },
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
      background: $black-20;
      border-radius: 6px;
      cursor: pointer;
      .info{
        font-size: 14px;
        font-weight: 500;
      }
      svg{
        transition: .35s;
      }
      .rotate{
        transform: rotateZ(180deg);
      }
    }
    .collapse-dropdown{
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 5px;
      row-gap: 10px;
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