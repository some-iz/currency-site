<template>
  <form @submit.prevent="userLogin()" class="pb-1 d-flex flex-column">
    <div class="mt-2 pt-1" v-show="level === 'login'">
      <label class="mb-1">شماره تلفن خود را وارد نمایید :</label>
      <input @keypress="onlyNumber" @input="filterOnlyNumber" v-model="user.phone" class="w-100 input-form mt-1"
        type="text" name="phone" placeholder="شماره تلفن خود را بدون صفر اولیه وارد نمایید..." />
    </div>
    <div v-show="level === 'password'" class="get-password mt-2 pt-1">
      <label class="mb-1">رمزعبور خود را وارد نمایید :</label>
      <input v-model="user.password" class="w-100 input-form mt-1" :type="showPass ? 'text' : 'password'"
        name="password" placeholder="رمز عبور خود را اینجا وارد نمایید..." />
      <b-icon-eye-fill v-if="!showPass" @click="showPass = true"></b-icon-eye-fill>
      <b-icon-eye-slash-fill v-else @click="showPass = false"></b-icon-eye-slash-fill>
    </div>
    <div v-if="level === 'login'" class="recaptcha w-100 mt-3  d-flex align-items-center justify-content-center">
      <recaptcha />
    </div>
    <btn :loading="loading" type="button" @click="userCheckExist()" v-if="level === 'login'"
      class="skip-level w-100 text-center">
      مرحله بعدی
    </btn>
    <div v-if="level === 'password'" class="w-100">
      <btn width="full" :loading="loading" class="mt-5 font-weight-bold" size="small">
        ورود به حساب کاربری
      </btn>
      <span @click="$emit('changeViewForget' , user.phone)"
        class="d-flex font-weight-bold align-items-center justify-content-center forget-pass-sec">
        <b-icon-unlock class="ml-1"></b-icon-unlock>
        بازیابی رمز عبور
      </span>
    </div>
  </form>
</template>

<script>
  import Btn from '~/components/widget/btn.vue'
  export default {
    components: {
      Btn
    },
    data() {
      return {
        level: 'login',
        loading: false,
        showPass: false,
        user: {
          phone: '',
          password: ''
        }
      }
    },
    methods: {
      onlyNumber($event) {
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57 || keyCode === 190) || keyCode === 46)
          $event.preventDefault();
        if (this.user.phone.length === 10)
          $event.preventDefault();
      },
      filterOnlyNumber(e) {
        e.target.value = e.target.value.replace(/[^0-9]+/g, '');
      },
      async userCheckExist() {
        if (this.user.phone.length !== 10) {
          this.$fire({
            title: 'شماره تلفن نامعتبر',
            text: 'شماره تلفن باید ۱۰ رقم و بدون صفر اولیه باشد!',
            type: "warning",
            timer: 10000
          })
          return false
        }
        // try {
        //   const token = await this.$recaptcha.getResponse()
        //   if (token !== null) {
            this.loading = true;
            const res = await this.$apiRun({
              auth: false,
              method: 'user_check_exists',
              vars: `?username=98${this.user.phone}`
            })
            this.loading = false;
            if (JSON.parse(res.ok) === true)
              this.level = 'password'
            else {
              if (res.error[0].code === 106)
                this.$emit('changeViewSignup', this.user.phone)
              else {
                this.$fire({
                  title: res.error[0].fa_title,
                  text: res.error[0].description_details,
                  type: "error",
                  timer: 10000
                })
              }
            }
        //   }
        // } catch (error) {
        //   this.$fire({
        //     title: "خطای امنیتی!",
        //     text: "برای تایید و ادامه ابتدا باید کپچا را حل نمایید...",
        //     type: "error",
        //     timer: 10000
        //   })
        //   return false
        // }
        // await this.$recaptcha.reset();
      },
      async userLogin() {
        this.loading = true;
        const res = await this.$apiRun({
          auth: false,
          method: 'user_signin',
          vars: `?mobile=98${this.user.phone}&password=${this.user.password}`
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
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
form{
    width: max-content;
    min-height: 280px;
    justify-content: space-between;
    input{
        @media screen and (min-width: 1143px) {
            display: block;
            width: 430px !important;
        }
    }
    label{
        font-size: 13px;
        color: $black-500;
        font-weight: 500;
    }
    .heading{
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
        h4{
            color: $black-700;
        }
    }
    input{
        background: $white-full;
        border-color: $black-70;
        padding: 8.5px 5px;
    }
    .skip-level{
        border-radius: 80px;
        padding: 10px 5px;
        border: 2px solid $black-70;
        background: $primary-color;
        cursor: pointer;
        font-weight: bold;
        font-size: 16px;
    }
    .forget-pass-sec{
        font-size: 12.5px;
        color: $black-300;
        opacity: .8;
        cursor: pointer;
        margin-top: 10px;
    }
    .get-password{
        position: relative;
        input{
            padding-left: 40px;
        }
        svg{
            font-size: 20px;
            position: absolute;
            left: 12px;
            bottom: 11px;
            cursor: pointer;
            opacity: .5;
            color: $info-color;
        }
    }
    .recaptcha{
        height: 78px;
        .g-recaptcha {
            transform: scale(0.99);
            border-right: 1px solid rgba(0, 0, 0, .04);
            border-radius: 7px;
        }
        @media screen and (max-width: 330px) {
            width: 200px !important;
            .g-recaptcha {
            width: 100% !important;
            transform: scale(0.7) translateX(40%);
            -webkit-transform: scale(0.7) translateX(40%);
            transform-origin: 0 0;
            -webkit-transform-origin: 0 0;
            }
        }
        @media screen and (max-width: 290px) {
            .g-recaptcha {
            transform: scale(0.7) translateX(45%);
            -webkit-transform: scale(0.7) translateX(45%);
            }
        }
    }
}
</style>