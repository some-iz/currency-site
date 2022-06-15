<template>
  <table class="table w-100">
    <thead>
      <tr>
        <!-- <th class="">
          #
        </th> -->
        <th>
          ارز
        </th>
        <th>
          قیمت خرید
        </th>
        <th>
          قیمت فروش
        </th>
        <th>
          تغییرات ۲۴ ساعته
        </th>
        <th>
          عملیات
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-bottom" v-for="i in 5" :key="i">
        <!-- <td class="">
          {{ $toFarsiNum(i) }}
        </td> -->
        <td class="arz-info d-flex align-items-center">
          <img src="/img/currency/bitcoin.png" alt="bit">
          <strong class="d-flex flex-column mr-1">
            بیت کوین
            <span class="mt-1">
                BTC
            </span>
          </strong>
        </td>
        <td>
          dfsf
        </td>
        <td>
          dfsf
        </td>
        <td>
          dfsf
        </td>
        <td>
          dfsf
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
table{
    padding: 0;
    margin: 0;
    overflow: hidden;
    thead{
        background: $black-50;
        font-size: 13px;
        font-weight: bold;
        color: $black-600;
        cursor: default;
    }
    tbody{
        font-size: 13px;
        color: $black-700;
        tr{
            transition: .2s;
            cursor: pointer;
            .arz-info{
                img{
                    border-radius: 36% 64% 58% 42% / 29% 32% 68% 71%;
                    width: 30px;
                    height: 30px;
                    background: $primary-color;
                    padding: 3px;
                }
                strong{
                    span{
                        color: $black-150;
                        font-size: 11.5px;
                    }
                }
            }
        }
        tr:hover{
            transform: scale(1.005 , 1);
            background: $black-20;
        }
    }
}
</style>