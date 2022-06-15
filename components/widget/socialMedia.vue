<template>
  <section class="w-100 social-media">
    <div class="container">
      <div class="row">
        <h4 class="col-12 text-center mt-4 mb-3 font-weight-bold">
          شبکه های اجتماعی ما
        </h4>
      </div>
      <div class="row pb-3">
        <div class="icon-sec col-12 col-md-6 p-0 pl-md-1 mb-2 mb-md-0 text-center text-md-left">
          <a href="">
            <img src="/img/social/5.png" alt="">
          </a>
          <a href="">
            <img src="/img/social/6.png" alt="">
          </a>
        </div>
        <div class="icon-sec col-12 col-md-6 p-0 text-center text-md-right">
          <a href="">
            <img src="/img/social/1.png" alt="">
          </a>
          <a href="">
            <img src="/img/social/7.png" alt="">
          </a>
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
.social-media{
  background: $black-20;
  box-shadow: 0 0 20px $black-70;
  h4{
      color: $black-650;
  }
  img {
    transition: .3s;
    width: 70px;
  }
  img:hover{
    transform: translateY(-5px);
  }
}
</style>