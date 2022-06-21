<template>
  <nav class="pt-3">
    <ul class="d-flex px-0">
      <li v-for="i in 7" :key="i" class="ml-4 pl-3">
        <a :href="i">منوی خانه</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
nav{
    ul{
        list-style: none;
        font-size: .88em;
        li{
          white-space: nowrap;
            a{
                color: $black-500;
                font-weight: 500;
            }
        }
    }
}
</style>