<template>
    <main class="w-100 d-flex panel disable-select">
    <sidebarDash
      :pageData="dashboardPageData.sidebar"
      :brand="dashboardPageData.brand"
      :sidebar="sidebar"
      :class="sidebar ? 'sidebar-open sidebar' : 'sidebar-close sidebar'"
    />
    <section
      :class="
        !sidebar ? 'main-panel-open main-panel' : 'main-panel-close main-panel'
      "
    >
      <navbarDash
        :sidebar="sidebar"
        :class="!sidebar ? 'navbar-panel-close navbar-panel' : 'navbar-panel'"
        @toggleSidebar="changeSidebar"
      />
      <div
        v-if="sidebar"
        @click="sidebar = !sidebar"
        class="phone-sidebar-close"
      ></div>
      <Nuxt />
    </section>
  </main>
</template>

<script>
export default {
  name: 'dashboard',
  middleware: 'authenticated',
  data() {
    return {
      sidebar: false,
    }
  },
  components: {
    sidebarDash: () => import('~/components/layouts/sidebarDash'),
    navbarDash: () => import('~/components/layouts/navbarDash'),
  },
  methods: {
    changeSidebar(e) {
      this.sidebar = e
    },
  },
  computed: {
    dashboardPageData() {
      return this.$store.state.pageData.dashboardPageData
    },
  },
}
</script>

<style lang="scss" scoped>
.panel {
  min-height: 100vh;
  overflow-y: auto;
  .phone-sidebar-close {
    display: none;
  }
  .sidebar {
    transition: 0.5s ease;
    z-index: 3;
  }
  .sidebar-open {
    width: 250px;
  }
  .sidebar-close {
    width: 80px;
  }
  .main-panel {
    transition: 0.5s ease;
    background: $white-full;
    position: relative;
    padding-top: 55px;
    .navbar-panel {
      position: fixed;
      top: 0;
      width: calc(100% - 250px);
      transition: 0.5s ease;
      z-index: 1;
    }
    .navbar-panel-close {
      width: calc(100% - 80px);
    }
  }
  .main-panel-open {
    width: calc(100% - 80px);
    margin-right: 80px;
  }
  .main-panel-close {
    width: calc(100% - 250px);
    margin-right: 250px;
  }
  @media screen and (max-width: 900px) {
    .sidebar-close {
      width: 0;
      padding: 0 !important;
      opacity: 0;
    }
    .navbar-panel-close {
      width: 100% !important;
    }
    .navbar-panel {
      width: 100% !important;
    }
    .main-panel-open {
      width: 100%;
      margin-right: 0;
    }
    .main-panel-close {
      width: 100%;
      margin-right: 0;
    }
    .phone-sidebar-close {
      display: block;
      position: fixed;
      background: $black-150;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
}
</style>