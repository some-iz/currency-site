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
}
</script>

<style lang="scss" scoped>

</style>