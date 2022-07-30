<template>
  <form @submit.prevent="SignupOrForgetApi()" class="pb-1 d-flex flex-column">
    <div class="code-input-sec d-flex flex-column align-items-center">
      <label class="mb-1 mt-2 font-weight-bold">
        کد تایید را برای شما فرستادیم...
        <span @click="userCodeRequest()" v-if="countDown === 0" class="again">
          (ارسال دوباره)
        </span>
        <span v-if="countDown !== 0" class="">
          ({{ zero }}{{ countDown }} ثانیه)
        </span>
      </label>
      <vue-fake-input dir="ltr" class="code-input mt-2 mb-1  d-flex" :length="4" :fontSize="30" inputColor="#fdc500"
        :allowPaste="true" :onlyNumber="true" v-model="user.code" />
    </div>
    <div v-show="false">
      <input v-model="phone" type="tel" disabled name="phone" />
    </div>
    <div class="mt-4 mb-2 get-password">
      <label class="mb-1">رمزعبور خود را وارد نمایید :</label>
      <input v-model="user.newPassword" class="w-100 input-form" :type="showPass ? 'text' : 'password'"
        name="password" />
      <b-icon-eye-fill v-if="!showPass" @click="showPass = true"></b-icon-eye-fill>
      <b-icon-eye-slash-fill v-else @click="showPass = false"></b-icon-eye-slash-fill>
    </div>
    <div v-if="signupDashView === 'signup'" class="mt-1 mb-2">
      <label class="mb-1">کد معرف خود را وارد نمایید :</label>
      <input v-model="user.ref" class="w-100 input-form" type="text" />
    </div>
    <btn class="mt-4 font-weight-bold" :loading="loading" size="small">
      {{ signupDashView === 'signup' ? 'تکمیل ثبت نام'
      : 'تغییر رمزعبور'
      }}
    </btn>
  </form>
</template>

<script>
  import btn from '~/components/widget/btn'
  var VueFakeInput
  if (process.browser) {
    VueFakeInput = require('vue-fake-input').default
  }
  export default {
    name: 'signup-dash',
    components: {
      btn,
      VueFakeInput
    },
    props: ['phone', 'signupDashView'],
    data() {
      return {
        user: {
          newPassword: '',
          code: '',
          codeToken: '',
          ref: ''
        },
        loading: false,
        countDown: 59,
        zero: null, // for countDown to add extra zero
        showPass: false
      }
    },
    mounted() {
      this.userCodeRequest()
    },
    methods: {
      countDownTimer() {
        let interval;
        if (this.countDown > 0) {
          interval = setTimeout(() => {
            this.countDown--
            if (this.countDown <= 9)
              this.zero = 0
            else if (this.countDown === 0)
              this.zero = 0
            else
              this.zero = null
            this.countDownTimer()
          }, 1050)
        }
      },
      async userCodeRequest() {
        const res = await this.$apiRun({
          auth: false,
          method: 'user_code_request',
          vars: `?api_runner=WEBSITE&mobile=98${this.phone}`
        })
        if (JSON.parse(res.ok) === true) {
          this.countDown = 59;
          this.zero = null;
          this.countDownTimer();
          this.user.codeToken = res.data[0].token
        } else {
          this.$fire({
            title: res.error[0].fa_title,
            text: res.error[0].description_details,
            type: "error",
            timer: 10000
          })
          return false
        }
      },
      SignupOrForgetApi() {
        if(this.user.code.length !== 4 || this.user.newPassword.trim().length === 0){
          this.$fire({
            title: 'فیلد نامعتبر',
            text: 'لطفا تمامی فیلدهای داده شده را کامل و صحیح پر نمایید!',
            type: "warning",
            timer: 10000
          })
          return false
        }
        this.loading = true;
        if (this.signupDashView === 'signup')
          this.signupUser();
        else
          this.restPassword()
      },
      async signupUser() {
        const res = await this.$apiRun({
          auth: false,
          method: 'user_signup',
          vars: `?token=${this.user.codeToken}&code=${this.user.code}&password=${this.user.newPassword}&referral_code=${this.user.ref}`
        })
        this.loading = false;
        if (JSON.parse(res.ok) === true) {
          this.$cookiz.set('username', res.data[0].username, { maxAge: 2147483647,path: '/'})
          this.$cookiz.set('token', res.data[0].token, {maxAge: 2147483647,path: '/'})
          this.$store.commit('changeUserTokenAndPhone', {token: res.data[0].token, phone: res.data[0].username,})
          this.$router.push('/dashboard')
        } else {
          this.$fire({
            title: res.error[0].fa_title,
            text: res.error[0].description_details,
            type: "error",
            timer: 10000
          })
          return false
        }
      },
      async restPassword() {
        const res = await this.$apiRun({
          auth: false,
          method: 'user_password_reset',
          vars: `?token=${this.user.codeToken}&code=${this.user.code}&password=${this.user.newPassword}`
        })
        this.loading = false;
        if (JSON.parse(res.ok) === true) {
          this.$cookiz.set('username', res.data[0].username, { maxAge: 2147483647,path: '/'})
          this.$cookiz.set('token', res.data[0].token, {maxAge: 2147483647,path: '/'})
          this.$store.commit('changeUserTokenAndPhone', {token: res.data[0].token, phone: res.data[0].username,})
          this.$router.push('/dashboard')
        } else {
          this.$fire({
            title: res.error[0].fa_title,
            text: res.error[0].description_details,
            type: "error",
            timer: 10000
          })
          return false
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  form {
    min-height: 280px;
    justify-content: space-between;
    input {
      font-weight: bold;
      background: $white-full;
      border-color: $black-70;
      padding: 8.5px 5px;
      @media screen and (min-width: 1143px) {
        display: block;
        width: 430px !important;
      }
    }
    label {
      font-size: 14px;
      color: $black-800;
      white-space: nowrap;
    }
    .code-input-sec {
      .code-input {
        display: block;
        input {
          width: 48px !important;
        }
      }
      label {
        span {
          color: $black-300;
          font-size: 11px;
          opacity: .65;
          
        }
        .again {
          color: $info-color;
          cursor: pointer;
          opacity: .3;
        }
      }
    }
    .heading {
      border-bottom: 2px solid $black-70;
      a , span{
        font-size: 11px;
        border-radius: 50px;
        border: 2px solid $black-300;
        opacity: .3;
        font-weight: bold;
        padding: 5px 8px;
        cursor: pointer;
        color: $black-700;
        transition: .4s;
        svg{
            font-size: 19px;
        }
      }
      a:hover{
        color: $black-900;
        opacity: .4;
        border: 2px solid $black-450;
      }
      h4 {
        color: $black-700;
      }
    }
    .get-password {
      position: relative;
      input {
        padding-left: 40px;
      }
      svg {
        font-size: 18px;
        position: absolute;
        left: 12px;
        bottom: 11px;
        cursor: pointer;
        opacity: .5;
        color: $info-color;
      }
    }
  }
</style>