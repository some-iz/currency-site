<template>
  <table class="table w-100">
    <thead>
      <tr v-if="isWallet">
        <th class="py-3 pr-3">
          # ارز
        </th>
        <th class="py-3">
          موجودی شما
        </th>
        <th class="py-3">
          معادل
          (<toman-logo></toman-logo>)
        </th>
        <th class="py-3">
          معادل
          (<b-icon icon="currency-dollar"></b-icon>)
        </th>
        <th class="th-action text-center py-3">
          عملیات
        </th>
      </tr>
      <tr v-else>
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
        <th class="th-action text-center py-3">
          عملیات
        </th>
      </tr>
    </thead>
    <tbody v-if="!loading">
      <tr class="border-bottom" v-for="(currency , i) in currencyList" :key="i">
        <td>
          <currency-show :faName="currency.fa_name" :imgSrc="currency.image" :symbol="currency.symbol"></currency-show>
        </td>

        <td v-if="isWallet" class="font-weight-bold py-4">
          {{ Number(currency.balance).toLocaleString('fa-IR' ,{minimumFractionDigits: 0,maximumFractionDigits: 10,}) }}
        </td>
        <td v-else class="font-weight-bold py-4">
          {{ Number(currency.buy_price).toLocaleString('fa-IR' ,{minimumFractionDigits: 0,maximumFractionDigits: 0,}) }}
          <toman-logo></toman-logo>
        </td>

        <td v-if="isWallet" class="font-weight-bold py-4">
          {{ Number((currency.sell_price * currency.balance)).toLocaleString('fa-IR',{minimumFractionDigits:
          0,maximumFractionDigits: 0,}) }}
          <toman-logo></toman-logo>
        </td>
        <td v-else class="font-weight-bold py-4">
          {{ Number(currency.sell_price).toLocaleString('fa-IR',{minimumFractionDigits: 0,maximumFractionDigits: 0,}) }}
          <toman-logo></toman-logo>
        </td>

        <td v-if="isWallet" class="py-4">
          {{ Number((currency.price * currency.balance)).toLocaleString('fa-IR') }}<b-icon icon="currency-dollar">
          </b-icon>
        </td>
        <td v-else dir="ltr" class="up py-4">
          <b-icon class="percent" icon="percent"></b-icon>
          {{ $toFarsiNum('+16') }}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="ml-1 bi bi-graph-up-arrow" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
          </svg>
        </td>
        <td class="text-left action py-4">
          <b-icon @click="showBody(i)" class="more" icon="three-dots-vertical"></b-icon>
          <div class="body-action">
            <nuxt-link :to="`/dashboard/trade?currency=${currency.symbol}`" class="buy p-1 px-2 rounded"
              v-if="currency.fa_name !== 'تومان'">خرید</nuxt-link>
            <nuxt-link :to="`/dashboard/trade?currency=${currency.symbol}`" class="sell p-1 px-2 rounded"
              v-if="currency.fa_name !== 'تومان'">فروش</nuxt-link>
            <nuxt-link
              :to="`/dashboard/transactions/deposit${currency.fa_name !== 'تومان' ? '?currency='+currency.symbol : ''}`"
              class="buy p-1 px-2 rounded">واریز</nuxt-link>
            <nuxt-link
              :to="`/dashboard/transactions/withdraw${currency.fa_name !== 'تومان' ? '?currency='+currency.symbol : ''}`"
              class="sell p-1 px-2 rounded">برداشت</nuxt-link>
          </div>
        </td>
      </tr>

    </tbody>
    <tbody class="loading" v-else>
      <tr v-for="i in 10" :key="i">
        <td v-for="i in 5" :key="i" class="py-3">
          <b-skeleton animation="wave" width="100%"></b-skeleton>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import tomanLogo from './tomanLogo.vue'
import CurrencyShow from './currencyShow.vue'
export default {
  components: { tomanLogo, CurrencyShow },
  props: ['currencyList', 'loading', 'isWallet'],
  data() {
    return {
      activeAction: null
    }
  },
  methods: {
    showBody(i) {
      let body = document.querySelectorAll('.body-action')
      body.forEach((el) => {
        el.classList.remove('activeToman')
        el.classList.remove('active')
      })
      body[i].classList.add(i === 0 ? 'activeToman' : 'active')
    }
  }
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
    th{
      white-space: nowrap;
    }
    .th-action{
      width: 150px;
    }
  }
  tbody{
    font-size: 13px;
    color: $black-700;
    tr{
      transition: .2s;
      cursor: pointer;
      td{
        transition: .2s;
        white-space: nowrap;
      }
      .action{
        position: relative;
        font-weight: 500;
        opacity: .7;
        .more{
          display: none;
        }
        .body-action{
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
          }
        }
        @media screen and (max-width: 800px) {
          opacity: 1;
          .more {
            position: relative;
            display:block;
            margin: auto;
            background: $black-50;
            border: 2px solid $black-50;
            padding: 4px;
            font-size: 25px;
            border-radius: 50%;
          }
          .body-action{
            display: none;
          }
          .active{
            background: $input-color;
            border: 2px solid $black-50;
            display: grid;
            grid-template-columns: 1fr 1fr;
            position: absolute;
            top: 7.5px;
            width: 150px;
            border-radius: 5px;
            left: 5px;
            a{
              width: 75px;
              text-align: center;
              display: block;
            }
          }
          .activeToman{
            background: $input-color;
            border: 2px solid $black-50;
            display: grid;
            grid-template-columns: 1fr 1fr;
            position: absolute;
            top: 21px;
            width: 150px;
            border-radius: 5px;
            left: 5px;
            a{
              width: 75px;
              text-align: center;
              display: block;
            }
          }
        }
      }
      .up{
        svg{
          color: $success-color;
        }
        .percent{
          color: $black-700;
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
  .loading > tr{
    cursor: wait !important;
  }
}
</style>