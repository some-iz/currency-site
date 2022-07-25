<template>
    <div class="main-ref">
        <div>
            <h4 class="font-weight-bold m-0">
                کد دعوت شما
            </h4>
            <p>دوستان خود را با لینک زیر به ارزفارم دعوت کنید:</p>
            <div class="main-ref">
                <div>
                    <span>کد دعوت شما :</span>
                    <span v-if="userReferral.length !== 0" dir="ltr">
                        {{ userReferral[0].referral_code }}
                        <copy-text :id="1" :text="userReferral[0].referral_code"></copy-text>
                    </span>
                </div>

                <div>
                    <span>لینک دعوت شما :</span>
                    <span v-if="userReferral.length !== 0" dir="ltr">
                        {{ baseUrl }}?refcode={{ userReferral[0].referral_code }}
                        <copy-text :id="1" :text="`${baseUrl}?refcode=${userReferral[0].referral_code}`"></copy-text>
                    </span>
                </div>
            </div>
        </div>
        <div class="statistics pt-3">
            <h4 class="font-weight-bold m-0">
                آمار کلی شما
            </h4>
            <div>
                <span>
                    تعداد کل دوستان شما
                    <strong class="pt-2">
                        {{ $toFarsiNum(allStatistics.number,true) }}
                    </strong>
                </span>
                <span>
                    تعداد معاملات دوستان
                    <strong class="pt-2">
                        {{ $toFarsiNum(allStatistics.trade,true) }}
                    </strong>
                </span>
                <span>
                    مجموع کارمزد دریافتی
                    <strong class="pt-2">
                        {{ $toFarsiNum(allStatistics.tradePercentage,true) }}
                        <TomanLogo></TomanLogo>
                    </strong>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import CopyText from './copyText.vue';
import TomanLogo from './tomanLogo.vue';
export default {
    components: { TomanLogo, CopyText },
    data() {
        return {
            baseUrl: '',

        };
    },
    computed: {
        userReferral() {
            return this.$store.state.referral.userReferral
        },
        allStatistics() {
            return this.$store.state.referral.allStatistics
        },
    },
    mounted() {
        this.baseUrl = window.location.origin
    },
}
</script>

<style lang="scss" scoped>
.main-ref {
    text-align: right;
    cursor: default;
    padding: 15px;
    border: 3px solid $black-50;
    border-radius: 15px;
    background: $black-20;
    div {
        p {
            margin-top: 0;
            font-size: 14px;
            color: $black-600;
        }
        >div {
            display: flex;
            justify-content: space-around;
            column-gap: 10px;
            div {
                display: flex;
                flex-direction: column;
                background: $black-50;
                color: $black-600;
                box-shadow: 0 0 12px $black-50;
                padding: 7px 10px;
                text-align: center;
                font-weight: 500;
                border-radius: 3px;
                span:first-child {
                    font-size: 14px;
                }
                span:last-child {
                    font-size: 15px;
                    overflow-wrap: anywhere;
                    margin-top: 5px;
                }
            }
            div:first-child {
                flex: 3;
            }
            div:last-child {
                flex: 10;
            }
            @media screen and (max-width: 400px) {
                flex-direction: column;
                row-gap: 10px;
            }
        }
    }
    .statistics {
        margin-top: 30px;
        border-top: 3px solid rgba(0, 0, 0, .1);
        h2 {
            margin-top: 12px;
        }
        div {
            margin-top: 10px;
            flex-direction: row;
            column-gap: 5px;
            span {
                font-size: 13px;
                display: flex;
                flex-direction: column;
                background:$black-50;;
                color: $black-500;
                box-shadow: 0 0 13px $black-50;
                padding: 10px 15px;
                text-align: center;
                border-radius: 3px;
                font-weight: 500;
                strong {
                    overflow-wrap: anywhere;
                    transform: translateY(4px);
                    font-size: 16px;
                }
            }
        }
    }
}
</style>