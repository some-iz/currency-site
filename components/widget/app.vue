<template>
  <section class="app container">
      <div class="app-sec w-100">
          <div class="row align-items-center">
              <div class="col-md-6 mb-5 mb-md-0">
                  <h3 class="mb-3 font-weight-bold">
                       خرید و فروش حرفه‌ای با ارزفارم 
                  </h3>
                  <div class="row">
                      <span v-for="i in 4" :key="i" class="col-6 mb-2">
                          <b-icon-lightning-charge-fill></b-icon-lightning-charge-fill>
                           خرید و فروش حرفه‌ای 
                      </span>
                  </div>
                  <div class="mt-4">
                      <btn v-for="i in 3" :key="i" class="px-4 ml-2" size="small">
                          <b-icon-lightning-charge-fill></b-icon-lightning-charge-fill>
                          تست یک
                      </btn>
                  </div>
              </div>
              <div class="col-md-6 img-app text-center">
                  <div class="bg-app">
                        <div></div>
                    </div>
                  <img class="img-fluid" src="/img/app/app.png" alt="">
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import Btn from './btn.vue'
  export default {
  components: {
    Btn  
  },

  }
</script>

<style lang="scss" scoped>
.app{
    .app-sec{
        position: relative;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  border-radius: 14% 86% 24% 76% / 54% 0% 100% 46% ;
        .bg-app{
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            border-radius: 30% 70% 79% 21% / 45% 35% 65% 55% ;
            overflow: hidden;
            background-color: #FAF5E4;;
            border: 2px solid #FAF5E4;;
            animation: ani-border 4s infinite alternate linear;
            div{
                width: 100%;
                height: 100%;
                background-image: url('../../static/img/patterns/currancy-pattern.png');
                background-size: 500px;
                opacity: .1;
            }
        }
        @keyframes ani-border {
            0%{
                border-radius: 30% 70% 79% 21% / 45% 35% 65% 55% ;
            }
            25%{
                border-radius: 35% 65% 91% 9% / 56% 43% 57% 44% ;
            }
            50%{
                border-radius: 78% 22% 48% 52% / 31% 79% 21% 69% ;
            }
            75%{
                border-radius: 60% 40% 10% 100% / 15% 25% 75% 85% ;
            }
            100%{
                border-radius: 63% 37% 16% 84% / 30% 25% 75% 70% ;
            }
        }
        .img-app{
            img{
                transform: translateY(-15px);
            }
        }
    }
}
</style>