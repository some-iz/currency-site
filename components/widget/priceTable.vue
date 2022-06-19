<template>
  <section class="price-table mt-4 pt-3">
    <div class="container">
      <div class="trade-sec w-100">
        <arz-table></arz-table>
        <div class="py-3 text-center font-weight-bold show-all">
          نمایش تمامی ارزها
          <b-icon-caret-left-fill></b-icon-caret-left-fill>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import arzTable from './arzTable.vue'
  export default {
  components: { arzTable },

  }
</script>

<style lang="scss" scoped>
.price-table{
  width: 100%;
  .trade-sec{
    border-radius: 10px;
    border: 2px solid $black-70;
    overflow: hidden;
    box-shadow: 0 0 20px $black-70;
    .show-all{
      color: $black-200;
      cursor: pointer;
      font-size: 13px;
    }
  }
}
</style>