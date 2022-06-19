<template>
  <div class="w-100 menu">
    <h4 class="font-weight-bold pb-2">
        <slot></slot>
    </h4>
    <ul class="p-1">
      <li class="mb-2" v-for="i in 5" :key="i">
        <nuxt-link to="/">
          تست منو {{ $toFarsiNum(i) }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.menu{
    h4{
      border-bottom: 2px solid $black-100;
      color: $black-650;
    }
    ul{
      list-style: none;
      li{
        font-size: 13.5px;
        font-weight: 500;
        opacity: .5;
        transition: .3s;
      }
      li:hover{
        opacity: .8;
        transform: translateX(-5px);
      }
    }
}
</style>