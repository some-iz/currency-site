<template>
  <section>
    <header-site></header-site>
    <nuxt />
    <footer-site class=""></footer-site>
  </section>
</template>

<script>
import FooterSite from '~/components/layouts/footerSite.vue'
import headerSite from '~/components/layouts/headerSite.vue'
export default {
  components: { headerSite, FooterSite },
  middleware: 'islogin',
}
</script>

<style lang="scss" scoped>

</style>