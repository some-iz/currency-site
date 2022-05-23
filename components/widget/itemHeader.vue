<template>
  <a :href="url" class="d-flex align-items-center">
    <slot></slot>
  </a>
</template>

<script>
  export default {
      props: ['url']
  }
</script>

<style lang="scss" scoped>
a{
    color: $black-250;
    font-size: .9em;
    font-weight: bold;
    svg{
        font-size: 1.2em;
        color: $black-300;
    }
}
</style>