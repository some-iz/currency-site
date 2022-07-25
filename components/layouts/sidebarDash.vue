<template>
  <aside class="sidebar-dash px-2 py-1">
    <div class="container-sidebar">
      <nuxt-link to="/" class="logo mb-3 d-flex align-items-center justify-content-center">
        <img class="img-fluid" width="48px" loading="lazy" :src="brand.imgSrc" :alt="brand.imgAlt">
        <h5 v-if="sidebar" class="mt-1 ml-1">
          {{ brand.faName }}
        </h5>
      </nuxt-link>

      <div class="item-menu mx-2 rounded my-2 px-2" v-for="(menu , i) in pageData" :key="i">
        <div :class="[sidebar ? 'justify-content-between' : 'justify-content-center' , 'd-flex w-100 align-items-center parent-menu']">
          <nuxt-link :to="menu.link" class="d-flex align-items-center main-link">
            <img class="icon-img" :src="menu.icon" />
            <span v-if="sidebar" class="mr-1">
              {{menu.title}}
            </span>
          </nuxt-link>
          <b-icon-caret-down-fill @click="showSubMenu(i)" v-if="sidebar && menu.submenu.length !== 0" class="icon-more">
          </b-icon-caret-down-fill>
        </div>
        <div v-if="sidebar && menu.submenu.length !== 0" class="mt-3 submenu-sec">
          <nuxt-link :to="sub.link" v-for="(sub , i) in menu.submenu" :key="i" class="d-block mx-1 rounded sub-link">
            {{ sub.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'sidebar-dash',
  components: {},
  props: ['sidebar' , 'pageData' , 'brand'],
  data () {
    return {
    }
  },
  methods: {
    showSubMenu(index) {
      const icon = document.querySelectorAll('.parent-menu')[index]
      const sub = document.querySelectorAll('.item-menu')[index]
      icon.children[1].classList.toggle('open')
      sub.children[1].classList.toggle('active')
    }
  }
}
</script>

<style lang="scss" scoped>

.sidebar-dash {
  overflow-y: auto;
  background: $white-full;
  border-left: 2px solid $black-70;
  position: fixed;
  z-index: 1;
  height: 100%;
  .container-sidebar{
    height: 100%;
    border-radius: 10px;
    overflow-y: scroll;
    scrollbar-width: none;
    .logo{
      color: $black-600;
      border: 2px solid $black-100;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
    .item-menu{
      background-color:rgba(0, 132, 255, 0.05);
      border: 2px solid $black-50;
      color: $black-500;
      cursor: default;
      padding: 8px 0;
      a{
        cursor: pointer;
        font-size: 13.5px;
        font-weight: bold;
        transition: .2s;
        border: 3px solid transparent;
        .icon-item {
          font-size: 13px;
        }
        span{
          white-space: nowrap;
          color: $black-600;
        }
      }
      .nuxt-link-exact-active {
        border-right: 3px solid $info-color;
        padding-right: 4px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
      .icon-img{
        width: 21px;
        opacity: 0.55;
        cursor: pointer;
      }
      .icon-more {
        width: 20px;
        opacity: 0.55;
        cursor: pointer;
        transition: .4s;
      }.open{
        transform: rotateZ(180deg);
      }
      .submenu-sec{
        display: none;
        .sub-link {
          margin-top: 7px !important;
          background-color: $black-50;
          padding: 11px 6px;
          font-size: 12.5px;
          opacity: .9;
        }
      }.active{
        display: block;
      }
    }
  }
  .container-sidebar::-webkit-scrollbar {
    width: 0;
  }
  h5{
    cursor: pointer;
  }
}
</style>