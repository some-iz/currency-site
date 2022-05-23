<template>
  <main>
    <exchange></exchange>
  </main>
</template>

<script>
import exchange from '~/components/widget/exchange.vue'
export default {
  components: { exchange },
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
main{
  height: 1000px;
}
</style>
