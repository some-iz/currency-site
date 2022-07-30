<template>
    <div class="show-user-info">
        <div class="body pb-1 d-flex align-items-center">
            <b-icon-person-circle class="display-3"></b-icon-person-circle>
            <div class="info-body mr-1 w-100 d-flex justify-content-between align-items-center">
                <h6 class="font-weight-bold w-100 mb-1 d-flex flex-column">
                    {{userInfo.name}}
                    {{ userInfo.lastname }}
                    <span class="font-weight-bold mt-2">
                        {{ userInfo.phone_number.split('').splice(2, 10).join('') }}
                    </span>
                </h6>
                <btn type="secondary" @click="logout()" size="small">
                    <b-icon-box-arrow-left class=""></b-icon-box-arrow-left>
                </btn>
            </div>
        </div>
        <div class="nav-to-page mt-3 pt-1">
            <btn base="nuxtLink" url="/dashboard/authentication" class="py-2 mb-1" size="small">
                مشخصات فردی
            </btn>
            <btn base="nuxtLink" url="/dashboard/referral" class="py-2 mb-1" size="small">
                دعوت از دوستان
            </btn>
            <btn base="nuxtLink" class="py-2 mb-1" url="/dashboard/authentication/wallet-address" size="small">
                کیف پولهای شما
            </btn>
            <btn base="nuxtLink" class="py-2 mb-1" url="/dashboard/authentication/bank-address" size="small">
                آدرسهای بانکی شما
            </btn>
        </div>
    </div>
</template>

<script>
import btn from './btn.vue'
export default {
    components: { btn },
    computed: {
        userInfo() {
            return this.$store.state.userInfo.info[0]
        },
    },
    methods: {
        logout() {
            this.$store.commit('logout', '')
        }
    }  
}
</script>

<style lang="scss" scoped>



.show-user-info {
    .body {
        svg{
            color: $black-800;
        }
        .info-body{
            h6{
                color: $black-650;
                >span {
                  font-size: 12px;
                  color:$black-500;
                  opacity: .4;
                  cursor: default;
                }
            }
            button{
                background: $white-full;
                border-color: $error-color;
                box-shadow: 0 0 0;
                padding: 7px;
                border-width: 2px;
                opacity: .8;
                svg {
                  color: $error-color;
                  font-size: 23px;
                  transform: translateX(-2px);
                }
            }
        }
    }
    .nav-to-page{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        >a{
            background: $black-50;
            border-color: $black-50;
            box-shadow: 0 0 0 !important;
            color: $black-500;
            font-size: 12px;
            font-weight: bold;
            text-align: center;
        }
    }
}
</style>