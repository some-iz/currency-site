<template>
    <div class="main-ref">
        <div>
            <h4 class="font-weight-bold m-0">
                کد دعوت شما
            </h4>
            <p>دوستان خود را با لینک زیر به ربیت دعوت کنید:</p>
            <div>
                <div>
                    <span>کد دعوت شما :</span>
                    <span dir="ltr">
                        11111
                        <!-- {{ userReferral[0].referral_code }} -->
                        <samp @click="copySomething('12345')">
                            <b-icon-clipboard-plus> </b-icon-clipboard-plus>
                        </samp>
                    </span>
                </div>

                <div>
                    <span>لینک دعوت شما :</span>
                    <span dir="ltr">
                        {{ path }}
                        <!-- {{$router.currentRoute}} -->
                        <!-- {{ baseUrl }}/panel?refcode={{ userReferral[0].referral_code }} -->
                        <samp v-clipboard:copy="111" @click="copyText(1)">
                            <b-icon-clipboard-plus> </b-icon-clipboard-plus>
                        </samp>
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
                        {{ $toFarsiNum(11,true) }}
                        <!-- {{ allStatistics.number }} -->
                    </strong>
                </span>
                <span>
                    تعداد معاملات دوستان
                    <strong class="pt-2">
                        {{ $toFarsiNum(11,true) }}
                        <!-- {{ allStatistics.trade }} -->
                    </strong>
                </span>
                <span>
                    مجموع کارمزد دریافتی
                    <strong class="pt-2">
                        {{ $toFarsiNum(11236,true) }}
                        <!-- {{ allStatistics.tradePercentage.toLocaleString() }} -->
                        <TomanLogo></TomanLogo>
                    </strong>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import TomanLogo from './tomanLogo.vue';

export default {
    data() {
        return {
            path: "",
            idTextCopy: false,
            linkTextCopy: false,
        };
    },
    mounted() {
        this.path = `https://${window.location.host}`;
    },
    methods: {
        async copySomething(text) {
            try {
                await this.$copyText(text);
            }
            catch (e) {
                console.error(e);
            }
        },
        copyText(id) {
            if (id === 1)
                this.idTextCopy = true;
            else if (id === 2)
                this.linkTextCopy = true;
            else {
                this.$fire({
                    title: "کپی شد...",
                    text: "لینک دعوت شما با موفقیت کپی شد...",
                    type: "success",
                    timer: 1300
                });
            }
            setTimeout(() => {
                this.linkTextCopy = false;
                this.idTextCopy = false;
            }, 2000);
        },
    },
    components: { TomanLogo }
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
                    font-size: 18px;
                    overflow-wrap: anywhere;
                    margin-top: 5px;
                }
                samp {
                    display: inline-block;
                    font-size: 17px;
                    overflow-wrap: anywhere;
                    cursor: pointer;
                    background: $primary_color;
                    padding: 8px;
                    width: 35px;
                    height: 35px;
                    border-radius: 10px;
                    svg {
                        transform: translateY(-3px);
                    }
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