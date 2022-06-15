<template>
  <section class="price-table mt-4 pt-3">
    <div class="container">
      <div class="trade-sec w-100">
        <!-- <div class="head-trade d-flex font-weight-bold">
          <span class="py-3 px-4 active">
            خرید از ربیت
          </span>
          <span class="py-3 px-4">
            فروش به ربیت
          </span>
        </div> -->
        <custom-table></custom-table>
      </div>
    </div>
  </section>
</template>

<script>
import customTable from './customTable.vue'
  export default {
  components: { customTable },

  }
</script>

<style lang="scss" scoped>
.price-table{
  width: 100%;
  .trade-sec{
    border-radius: 10px;
    border: 2px solid $black-50;
    overflow: hidden;
  }
}
</style>