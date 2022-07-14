<template>
    <div class="all-ref-link">
        <h3>کدهای دعوت شما</h3>
        <div class="head-table">
            <span>
                کد دعوت
            </span>
            <span>
                لینک دعوت
            </span>
            <span>
                سهم شما
            </span>
            <span>
                سهم دوستان
            </span>
            <span>
                تعداد دوستان
            </span>
            <span>
                کارمزد دریافتی
            </span>
        </div>
        <div v-for="(ref, i) in userReferral" class="table-details" :key="i">
            <span>
                <span>
                    کد دعوت :
                </span>
                {{ ref.referral_code }}
            </span>
            <span dir="ltr">
                {{ baseUrl }}/panel?refcode={{ ref.referral_code }}
                <samp v-clipboard:copy="`${baseUrl}/panel?refcode=${ref.referral_code}`" @click="copyText(3)"
                    id="table-link">
                    <!--                    <i class="fa fa-check" aria-hidden="true"></i>-->
                    <i class="fa fa-clone" aria-hidden="true"></i>
                </samp>
            </span>
            <span>
                <span>
                    سهم شما :
                </span>
                %{{ ref.user_profit }}
            </span>
            <span>
                <span>
                    سهم دوستان :
                </span>
                %{{ ref.subset_profit }}
            </span>
            <span>
                <span>
                    تعداد دوستان :
                </span>
                {{ ref.referral_count }}
            </span>
            <span>
                <span>
                    کارمزد دریافتی :
                </span>
                {{ ref.profit_referral_code.toLocaleString() }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            percentage: 30,
            idTextCopy: false,
            linkTextCopy: false,
            userReferral: [],
            baseUrl: '',
            allStatistics: {
                number: 0,
                trade: 0,
                tradePercentage: 0
            },
        }
    },
}
</script>

<style lang="scss" scoped>
.all-ref-link {
    cursor: default;
    background: $black-20;
    margin-top: 30px;
    border: 3px solid $black-50;
    border-radius: 10px;
    padding: 10px;
    h3 {
        margin: 0;
        padding-top: 10px;
        padding-bottom: 15px;
        border-bottom: 3px solid $black-70;
        color: $black-600;
    }
    .head-table {
        display: grid;
        text-align: right;
        grid-template-columns: 1fr 3fr 1fr 1fr 1fr 2fr;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 400;
        border-bottom: 3px solid $black-50;
        padding-bottom: 7px;
        color: $black-500;
        span:not(span:first-child) {
            text-align: center;
            overflow-wrap: anywhere;
        }
    }
    .table-details {
        display: grid;
        text-align: right;
        grid-template-columns: 1fr 3fr 1fr 1fr 1fr 2fr;
        margin: 25px 0;
        >span {
            span {
                display: none;
            }
        }
        >span:not(span:nth-child(2)) {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        >span:first-child {
            justify-content: start !important;
        }
        ;
        >span:not(span:first-child) {
            text-align: center;
            overflow-wrap: anywhere;
            samp {
                display: inline-block;
                font-size: 15px;
                overflow-wrap: anywhere;
                cursor: pointer;
                i {
                    background: $primary_color;
                    padding: 8px;
                    border-radius: 100%;
                    color: rgba(0, 0, 0, 0.3);
                }
                .fa-clone {
                    transform: rotateY(180deg);
                }
            }
        }
    }
    @media screen and (max-width: 800px) {
        .head-table {
            display: none;
        }
        .table-details {
            grid-template-columns: 1fr;
            padding-bottom: 25px;
            margin-bottom: 25px;
            border-bottom: 2px dashed rgba(0, 0, 0, .2);
            >span {
                padding: 10px 0;
                span {
                    display: inline-block;
                    margin-left: auto;
                    color: rgba(0, 0, 0, .5);
                    font-size: 14px;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>