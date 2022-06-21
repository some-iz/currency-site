<template>
  <section>
    <login v-if="view === 'login'" @changeViewForget="changeViewForget" @changeViewSignup="changeViewSignup"></login>
    <signup v-else :phone="phone" :signupDashView="signupDashView"></signup>
  </section>
</template>

<script>
import login from '../widget/login.vue'
import Signup from '../widget/signup.vue'
export default {
  components: { login, Signup },
  data() {
    return {
      view : 'login',
      phone: '',
      signupDashView: 'signup'
    }
  },
  methods: {
    changeViewForget(e){
      this.view = 'signup'
      this.phone = e
      this.signupDashView = 'forget'
    },
    changeViewSignup(e){
      this.view = 'signup'
      this.phone = e
      this.signupDashView = 'signup'
    }
  }  
}
</script>

<style lang="scss" scoped>

</style>