<template>
    <label class="w-100 mb-3 font-weight-bold">
        کد تایید پیامکی :
        <span class="d-flex align-items-center code-request mt-1">
            <TheMask v-model="codeInfo.code" @input="$emit('sendCode', codeInfo)" class="input-form w-100"
                :mask="['####']" placeholder="کد تایید ۴ رقمی را وارد نمایید." />
            <Btn :loading="loading" :loadingCount="1" @click="getCode()" class="px-2 rounded font-weight-bold"
                size="small">ارسال کد</Btn>
        </span>
    </label>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import Btn from '~/components/widget/btn.vue'
export default {
    components: { Btn, TheMask },
    data() {
        return {
            loading: false,
            codeInfo: {
                code: '',
                token: ''
            }
        }
    },
    methods: {
        async getCode() {
            this.loading = true
            const res = await this.$apiRun({
                auth: true,
                method: 'user_verification_code_get',
                vars: ``
            })
            if (JSON.parse(res.ok) === true) {
                this.$fire({
                    title:'عملیات موفق',
                    text: 'کد امنیتی به شماره تلفن شما پیامک گردید...',
                    type: "success",
                    timer: 10000
                })
                this.codeInfo.token = res.data[0].token
            } else {
                this.$fire({
                    title: res.error[0].fa_title,
                    text: res.error[0].description_details,
                    type: "error",
                    timer: 10000
                })
            }
            this.loading = false
        }
    }
}
</script>

<style lang="scss" scoped>
.code-request{
    position: relative;
    input{
      padding-left: 65px !important;
    }
    button{
      white-space: nowrap;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      padding: 6.85px 0;
      font-size: 12px;
      background: $success-color;
      border: 2px solid $success-color;
      color: $white-full;
    }
}
</style>