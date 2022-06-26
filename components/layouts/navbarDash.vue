<template>
  <section class="navbar-dash d-flex px-2 justify-content-between ">
  <b-icon-list @click="$emit('toggleSidebar' , !sidebar)" class="menu-icon"></b-icon-list>
  <div class="left">
    <b-icon-fullscreen v-if="!fullScreen" @click="changeFullscreen()" class="menu-icon"></b-icon-fullscreen>
    <b-icon-fullscreen-exit v-else @click="changeFullscreen()" class="menu-icon"></b-icon-fullscreen-exit>
    <b-icon-envelope v-b-toggle.sidebar-msg class="menu-icon"></b-icon-envelope>
    <b-icon-bell v-b-toggle.sidebar-notification class="menu-icon"></b-icon-bell>
    <b-icon-person v-b-toggle.sidebar-profile class="menu-icon ml-1"></b-icon-person>
  </div>
  <!-- <togglerSidebar v-for="(data , i) in navbarTogglerTitle" :key="i" :id="data.id" :title="data.title"></togglerSidebar> -->
</section>
</template>

<script>
export default {
  name: 'navbar-dash',
  components: {
    // togglerSidebar : () => import('~/components/widget/togglerSidebar'),
  },
  props: ['sidebar'],
  data() {
    return {
      fullScreen: false
    }
  },
  computed: {
    navbarTogglerTitle() {
      return this.$store.state.pageData.dashboardPageData.navbarTogglerTitle
    }
  },
  methods: {
    changeFullscreen() {
      const body = document.documentElement;
      if (this.fullScreen === false) {
        this.fullScreen = true
        if (body.requestFullscreen) {
          body.requestFullscreen();
        } else if (body.webkitRequestFullscreen) { /* Safari */
          body.webkitRequestFullscreen();
        } else if (body.msRequestFullscreen) { /* IE11 */
          body.msRequestFullscreen();
        }
      }
      else {
        this.fullScreen = false
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar-dash {
    position: relative;
    height: 55px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid $black-100;
    background: $white-full;
    color: $black-600;
    .menu-icon{
        font-size: 28px;
        border-radius: 5px;
        cursor: pointer;
    }
    .left{
        .menu-icon {
          padding: 4px;
          border-radius: 50%;
          margin-left: 1.5px;
        }
        .menu-icon:first-child {
          font-weight: bolder;
          transform: scale(.8,.8);
        }
        .menu-icon:last-child {
          border: 2px solid $black-600;
          padding: 2px;
          padding-bottom: 3.2px;
        }
    }
}
</style>