<template>
  <div class="arz-info d-flex align-items-center">
    <img :class="isSecondBg ? 'default' : ''" :src="imgSrc" loading="lazy" :alt="faName + ' ' + symbol ">
    <strong class="d-flex flex-column mr-1">
      {{faName}}
      <span class="mt-1">
        {{symbol}}
      </span>
    </strong>
  </div>
</template>

<script>
  export default {
    props: ['imgSrc' , 'symbol' , 'faName' , 'isSecondBg']
  }
</script>

<style lang="scss" scoped>
.arz-info{
    transform: translateY(2px);
    font-size: 14px;
    img{
        border-radius: 36% 64% 58% 42% / 29% 32% 68% 71%;
        width: 30px;
        height: 30px;
        background: $primary-color;
        padding: 4px;
    }
    .default{
      background:$default-color;
    }
    strong{
        span{
            color: $black-150;
            font-size: 11px;
        }
    }
}
</style>