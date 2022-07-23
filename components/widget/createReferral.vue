<template>
    <div class="create-ref text-right  d-flex flex-column justify-content-between">
        <h4 class="m-0 font-weight-bold">
            ساخت کد دعوت
        </h4>
        <p>
            نرخ کارمزد اهدایی به خود و دوستانتان را مشخص نمایید:
        </p>
        <div class="show-val">
            <span>
                سهم شما:
                <strong>
                    %{{ $toFarsiNum(percentage) }}
                </strong>
            </span>
            <span>
                سهم دوستان:
                <strong>
                    %{{ $toFarsiNum(30 - percentage) }}
                </strong>
            </span>
        </div>
        <div class="set-val mt-2">
            <btn v-for="i in 7" :key="i" @click="percentage = (i - 1) * 5"
                :class="percentage === (i - 1) * 5 ? 'active value-ref font-weight-bold' : 'font-weight-bold value-ref'"
                size="small">
                %{{ $toFarsiNum((i - 1) * 5) }}
            </btn>
        </div>
        <btn :loading="loading" @click="generatorCode()" class="font-weight-bold mt-4" width="full" size="small">
            ساخت کد دعوت
        </btn>
    </div>
</template>

<script>
import btn from './btn.vue'
export default {
  components: { btn },
    data() {
        return {
            percentage: 30,
            loading: false,
        }
    },
    methods: {
        async generatorCode() {
            this.loading = true
            let res = await this.$store.dispatch('referral/generateReferral', this.percentage)
            if (JSON.parse(res.ok) === true) {
                this.$fire({
                    title: "عملیات موفق",
                    text: "کد دعوت شما با موفقیت افزوده گردید...",
                    type: "success",
                    timer: 10000
                });
            } else {
                this.$fire({
                    title: "عملیات ناموفق",
                    text: res.error[0].description_details,
                    type: "error",
                    timer: 10000
                });
            }
            this.loading = false
        }
    }
}
</script>

<style lang="scss"scoped>
.create-ref {
  border: 3px solid $black-50;
  border-radius: 15px;
  padding: 15px;
  cursor: default;
  background: $black-20;
  p {
    font-size: 14px;
    margin-top: 3px;
    color: $black-500;
  }
  .show-val {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 25px;
    margin-top: 20px;
    column-gap: 5px;
    span {
      display: flex;
      font-weight: 500;
      flex-direction: column;
      font-size: 14px;
      align-items: center;
      background: $black-50;
      color: $black-600;
      box-shadow: 0 0 12px $black-50;
      width: 90px;
      padding: 10px 5px;
      border-radius: 3px;
      strong {
        font-size: 23px;
        transform: translateY(5px);
      }
    }
  }
  .set-val {
    text-align: center;
    .value-ref {
      cursor: pointer;
      padding: 5px 8px;
      padding-top: 8px;
      padding-right: 10px;
      margin: 3px 4px;
      background: $black-20;
      border: 2px solid $black-70;
      color: $black-700;
      border-radius: 5px;
      transition: 0.5s;
    }
    & .active {
      background: $primary-color-for-secondary-btn;
      color: $white-full;
    }
  }
}
</style>