<template>
  <div class="arz-info d-flex align-items-center">
    <CurrencyImg :isSecondBg="isSecondBg" :imgSrc="imgSrc" :faName="faName" :symbol="symbol"></CurrencyImg>
    <strong class="d-flex flex-column mr-1">
      {{faName}}
      <span class="mt-1">
        {{symbol}}
      </span>
    </strong>
  </div>
</template>

<script>
import CurrencyImg from './currencyImg.vue';
  export default {
    props: ["imgSrc", "symbol", "faName", "isSecondBg"],
    components: { CurrencyImg }
}
</script>

<style lang="scss" scoped>
.arz-info{
    transform: translateY(2px);
    font-size: 14px;
    strong{
        span{
            color: $black-150;
            font-size: 11px;
        }
    }
}
</style>