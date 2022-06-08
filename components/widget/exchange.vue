<template>
  <section class="exchange mt-4 pt-3">
    <div class="container">
      <div class="trade-sec w-100">
        <div class="head-trade d-flex font-weight-bold">
          <span class="py-3 px-4 active">
            خرید از ربیت
          </span>
          <span class="py-3 px-4">
            فروش به ربیت
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.exchange{
  min-height: 650px;
  width: 100%;
  .trade-sec{
    height: 200px;
    border: 3px solid $black-50;
    border-radius: 20px;
    overflow: hidden;
    .head-trade{
      background: $black-50;
      font-size: 14px;
      span{
        cursor: pointer;
        color: $black-300;
      }
      .active{
        background: $second-color;
        color: $black-full;
      }
    }
  }
}
</style>