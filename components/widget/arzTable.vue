<template>
  <table class="table w-100">
    <thead>
      <tr>
        <th class="py-3 pr-3">
          # ارز
        </th>
        <th class="py-3">
          قیمت خرید
        </th>
        <th class="py-3">
          قیمت فروش
        </th>
        <th class="py-3">
          تغییرات ۲۴ ساعته
        </th>
        <th class="text-center py-3">
          عملیات
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-bottom" v-for="i in 5" :key="i">
        <td class="arz-info">
          <div class="d-flex align-items-center">
            <img src="/img/currency/bitcoin.png" alt="bit">
            <strong class="d-flex flex-column mr-1">
              بیت کوین
              <span class="mt-1">
                  BTC
              </span>
            </strong>
          </div>
        </td>
        <td class="font-weight-bold py-4">
          {{ $toFarsiNum(12222000 ,true) }}
          <toman-logo></toman-logo>
        </td>
        <td class="font-weight-bold py-4">
          {{ $toFarsiNum(12222000 ,true) }}
          <toman-logo></toman-logo>
        </td>
        <td dir="ltr" class="up py-4">
          % {{ $toFarsiNum('+16') }}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ml-1 bi bi-graph-up-arrow" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
          </svg>
        </td>
        <td class="text-center action py-4">
          <span class="buy p-1 px-2 rounded">خرید</span>
          <span class="sell p-1 px-2 rounded">فروش</span>
          <span class="buy p-1 px-2 rounded">واریز</span>
          <span class="sell p-1 px-2 rounded">برداشت</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import tomanLogo from './tomanLogo.vue'
  export default {
  components: { tomanLogo },

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
          transform: translateY(2px);
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
      .action{
        width: 230px;
        font-weight: 500;
        opacity: .7;
        .buy{
          color: $success-color;
          transition: .3s;
        }
        .buy:hover{
          background: $green-100;
        }
        .sell{
          color: $error-color;
          transition: .3s;
        }
        .sell:hover{
          background: $red-100;
;        }
      }
      .up{
        svg{
          color: $success-color;
        }
      }
      .down{
        svg{
          color: $error-color;
        }
      }
    }
    tr:hover{
      background: $black-20;
    }
  }
}
</style>