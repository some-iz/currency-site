<template>
  <section class="exchange">
    <div class="trade-sec w-100">
      <div class="head-trade d-flex font-weight-bold">
        <span @click="changeTab(0)" :class="[viewId === 0 ? 'active' : '','py-3 px-4']">
          خرید از ارزفارم
        </span>
        <span @click="changeTab(1)" :class="[viewId === 1 ? 'active' : '','py-3 px-4']">
          فروش به ارزفارم
        </span>
      </div>
      <div class="row main-trade">
        <div class="col-md-8 px-4 px-md-4 px-lg-5 d-flex flex-column justify-content-around">

          <div class="pt-4">
            <label class="w-100 d-block font-weight-bold">
              {{ formTitleTop }}
            </label>
            <div class="d-flex flex-column-reverse flex-md-row">
              <input v-model="topInput.value" class="input-currency mb-4 mb-md-0 mt-2 mt-md-0 w-100" v-currency="{
                currency: null,
                locale: 'en',
                allowNegative: false,
                distractionFree: false,
                precision: {min: 0,max: 7},
                valueRange: {max:999999999999}
              }" @keydown="whichInput='top'" @input="setCurrencyValue('top')" />
              <v-select @input="setCurrencyValue()" v-if="!loading" v-model="topInput.option"
                :options="currencyListWithoutToman" :clearable="false" dir="rtl" label="fa_name"
                class="input-currency px-0 input-currency-select">
                <template slot="option" slot-scope="option">
                  <CurrencyImg :imgSrc="option.image" :faName="option.fa_name" :symbol="option.symbol"></CurrencyImg>
                  <span>{{ option.fa_name }}</span>
                </template>

                <template slot="selected-option" slot-scope="option" :value="option.fa_name">
                  <CurrencyImg :imgSrc="option.image" :faName="option.fa_name" :symbol="option.symbol"></CurrencyImg>
                  <span class="mr-1">{{ option.fa_name }}</span>
                </template>

                <div class="" dir="rtl" slot="no-options">
                  متاسفانه این ارز وجود ندارد....
                </div>
              </v-select>
            </div>
          </div>

          <div class="text-center icon-swap mb-0 mb-md-0">
            <b-icon icon="arrow-down-up"></b-icon>
          </div>

          <div class="pb-4">
            <label class="w-100 d-block font-weight-bold">
              {{ formTitleBottom }}
            </label>
            <div class=" d-flex flex-column-reverse flex-md-row">
              <input v-model="bottomInput.value" v-currency="{currency: null,
                locale: 'en',
                allowNegative: false,
                distractionFree: false,
                precision: {min: 0,max: 0},
                valueRange: {max:999999999999}
              }" @keydown="whichInput='bottom'" @input="setCurrencyValue('bottom')"
                class="mb-2 mb-md-0 mt-2 mt-md-0 input-currency w-100" />
              <v-select v-if="!loading" dir="rtl" v-model="bottomInput.option" :options="tomanList" :clearable="false"
                label="fa_name" class="input-currency px-0 input-currency-select">
                <template slot="option" slot-scope="option">
                  <CurrencyImg :imgSrc="option.image" :faName="option.fa_name" :symbol="option.symbol"></CurrencyImg>
                  <span>{{ option.fa_name }}</span>
                </template>

                <template slot="selected-option" slot-scope="option" :value="option.fa_name">
                  <CurrencyImg :imgSrc="option.image" :faName="option.fa_name" :symbol="option.symbol"></CurrencyImg>
                  <span class="mr-1">{{ option.fa_name }}</span>
                </template>

                <div class="" dir="rtl" slot="no-options">
                  متاسفانه این ارز وجود ندارد....
                </div>
              </v-select>
            </div>
          </div>

          <btn @click="showModal = true" class="mb-4 font-weight-bold">
            {{ viewId === 0 ? 'خرید' : 'فروش'}}
            {{ $toFarsiNum(topInput.value)}}
            {{ topInput.option.fa_name }}
          </btn>
          {{ viewId }}
          <custom-modal :title="`تایید نهایی فرآیند ${viewId === 0 ? 'خرید' : 'فروش'}`" :showModal="showModal" @closeModal="showModal = false">
            <submit-order :currencyList="currencyList" :topInput="topInput" :bottomInput="bottomInput" :type="viewId"></submit-order>
          </custom-modal>
        </div>
        <div class="col-md-4">
          <img class="img-fluid" src="/img/trade/trade.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import vSelect from 'vue-select'
import "vue-select/src/scss/vue-select.scss";
import Btn from './btn.vue';
import CurrencyImg from './currencyImg.vue';
import CustomModal from './customModal.vue';
import SubmitOrder from './submitOrder.vue';
export default {
  components: {
    vSelect,
    CurrencyImg,
    Btn,
    CustomModal,
    SubmitOrder
  },
  data() {
    return {
      showModal: false,
      interval: null,
      loading: true,
      viewId: 0,
      whichInput: 'top',
      formTitleTop: 'چقدر می‌خواهید؟',
      formTitleBottom: 'قیمت خرید:',
      topInput: {
        value : 1,
        option : { fa_name: '', image: '' }
      },  
      bottomInput: {
        value : 0,
        option : { fa_name: '', image: '' }
      },

    }
  },
  computed: {
    currencyList() {
      return this.$store.state.currency.currencyList
    },
    currencyListWithoutToman() {
      return this.$store.state.currency.currencyListWithoutToman
    },
    tomanList() {
      return this.$store.state.currency.tomanList
    }
  },
  async mounted() {
    if (this.currencyList.length === 0)
      await this.$store.dispatch('currency/getCurrencyList')
    this.currencyList.map((el) => {
      if (el.fa_name === 'تومان') {
        this.bottomInput.option.fa_name = el.fa_name
        this.bottomInput.option.image = el.image
      }
      else {
        if (this.$route.query.currency) {
          if (this.$route.query.currency.toUpperCase() === el.symbol) {       
            this.topInput.option.fa_name = el.fa_name
            this.topInput.option.image = el.image
          }
        }
        if (this.topInput.option.fa_name === '') { 
          this.topInput.option.fa_name = el.fa_name
          this.topInput.option.image = el.image
        }
      }
    })
    this.setCurrencyValue();
    this.loading = false
    this.interval = setInterval(() => this.getCurrencyInterval(), 10000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    getCurrencyInterval() {
      this.$store.dispatch('currency/getCurrencyList')
      this.setCurrencyValue();
    },
    changeTab(id) {
      if (id === 0) {
        this.viewId = id;
        this.formTitleTop = 'چقدر می‌خواهید؟';
        this.formTitleBottom = 'قیمت خرید:';
      }
      else if (id === 1) {
        this.viewId = id;
        this.formTitleTop = 'چقدر می‌فروشید؟';
        this.formTitleBottom = 'قیمت فروش:';
      }
      this.setCurrencyValue()
    },
    setCurrencyValue() {
      // get selected currency value in select tag html
      let arzValue = {};
      for (let i = 0; i < this.currencyList.length; i++) {
        if (this.topInput.option.fa_name === this.currencyList[i].fa_name)
          arzValue = this.currencyList[i]
      }
      if (this.whichInput === 'top') {
        let topInputValue = this.topInput.value.replaceAll(",", "");
        if (this.viewId === 0) {
          this.bottomInput.value = Number(topInputValue * arzValue.sell_price).toLocaleString(
            undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }
          )
        }
        else if (this.viewId === 1) {
          this.bottomInput.value = Number(topInputValue * arzValue.buy_price).toLocaleString(
            undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }
          )
        }
      }
      else if (this.whichInput === 'bottom') {
        let bottomInputValue = this.bottomInput.value.replaceAll(",", "");
        if (this.viewId === 0) {
          this.topInput.value = Number(bottomInputValue / arzValue.sell_price).toLocaleString(
            undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 7,
          }
          )
        }
        else if (this.viewId === 1) {
          this.topInput.value = Number(bottomInputValue / arzValue.buy_price).toLocaleString(
            undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 7,
          }
          )
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.exchange{
  width: 100%;
  .trade-sec{
    min-height: 200px;
    border: 3px solid $black-50;
    border-radius: 20px;
    overflow: hidden;
    .head-trade{
      background: $black-50;
      font-size: 14px;
      span{
        cursor: pointer;
        color: $black-300;
        transition: .3s;
      }
      .active{
        background: $white-full;
        color: $black-full;
      }
    }
    .main-trade{
      .input-currency{
        background: $black-20;
        border: 2px solid $black-50;
        outline: 0;
        height: 55px;
        padding: 6px 8px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        font-size: 15px;
        font-weight: bold;
        color: $black-500;
      }
      .input-currency-select{
        min-width: 200px;
        white-space: nowrap !important;
        border-right: 0;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      @media screen and (max-width: 768px) {
        .input-currency{
          border: 2px solid $black-50;
          border-radius: 10px;
        }
      }
      .icon-swap{
        svg{
          background: $green-50;
          color: $black-500;
          border: 2px solid $green-100;
          padding: 7px;
          font-size: 35px;
          border-radius: 50%;
        }
      }
      button{
          border-radius: 10px;
      }
    }
  }
}
</style>