<template>
    <section class="container-fluid">
        <div class="row mt-3 px-3">
            <div class="col-md-7 px-0">
                <h4>
                    <b-icon icon="plus"></b-icon>
                    افزودن کارت بانکی جدید
                </h4>
                <div v-show="step===1" class="card">
                    <div class="bankname">
                        <img draggable="false" class="no-img" v-if="bankName === 'no'"
                            :src="'/img/bank/' + bankName + '.png'" alt="نام بانک">
                        <img draggable="false" v-else :src="'/img/bank/' + bankName + '.png'" alt="نام بانک">
                        <img draggable="false" src="/icon.png" class="logo">
                    </div>
                    <div id="get-card">
                        <TheMask v-on:input="check_card_number" v-model="card_number" class="cardNumber"
                            :mask="['####-####-####-####']" placeholder="شماره کارت خود را وارد کنید" />
                    </div>
                    <div class="btnc">
                        <span v-if="!card_currect && card_number.length === 16" class="cardinvalid">
                            شماره کارت معتبر نمی باشد!
                        </span>
                        <span></span>
                        <btn class="py-1 px-2 font-weight-bold rounded" size="small">
                            مرحله بعدی
                        </btn>
                        <!-- <MButton @click="changeStep('next')" :disabled="!card_currect" size="small"
                            :type="card_currect?'success':'default'">
                            مرحله بعدی
                        </MButton> -->
                    </div>
                </div>
                <!-- <h1 v-show="step===2">
                <i class="fa fa-plus"></i> ثبت حساب جدید <strong><span>(جهت برداشت
                            وجه)</span></strong>
                            </h1>
                <div v-show="step===2" class="card">
                    <div class="bankname">
                        <img draggable="false" class="no-img" v-if="bankName === 'no'"
                            :src="'/assets/bank/' + bankName + '.png'" alt="نام بانک">
                        <img draggable="false" v-else :src="'/assets/bank/' + bankName + '.png'" alt="نام بانک">
                        <img draggable="false" src="/assets/logoH.png" class="faraLogo">
                    </div>
                    <div id="get-shaba">
                        <TheMask v-model="shaba_number" v-on:input="check_shaba_number" class="cardNumber"
                            :mask="['IR-####-####-####-####-####-####']"
                            placeholder="شماره شبا حساب خود را وارد کنید" />
                    </div>
                    <div class="btnc">
                        <span v-if="!shaba_currect && shaba_number.length === 24" class="cardinvalid">شماره شبا معتبر
                            نمی باشد!</span>
                        <span v-else @click="changeStep('pre')" id="pre-level" class="cardinvalid">مرحله قبلی</span>
                        <MButton @click="submitBankAcc()" :disabled="!shaba_currect" size="small"
                            :type="shaba_currect?'success':'default'">
                            ثبت حساب
                        </MButton>
                    </div>
                </div> -->
            </div>

        </div>
    </section>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import Btn from '~/components/widget/btn.vue'
export default {
    layout: 'dashboard',
    components: { TheMask, Btn },
    data() {
        return {
            step: 1,
            banks: {
                603799: "بانک ملی ایران",
                589210: "بانک سپه",
                627961: "بانک صنعت و معدن",
                603770: "بانک کشاورزی",
                639217: "بانک کشاورزی",
                628023: "بانک مسکن",
                627648: "بانک توسعه صادرات ایران",
                207177: "بانک توسعه صادرات ایران",
                502908: "بانک توسعه تعاون",
                627760: "پست بانک ایران",
                627412: "بانک اقتصاد نوین",
                622106: "بانک پارسیان",
                639194: "بانک پارسیان",
                627884: "بانک پارسیان",
                627488: "بانک کارآفرین",
                502910: "بانک کارآفرین",
                621986: "بانک سامان",
                639346: "بانک سینا",
                585947: "بانک خاور میانه",
                504706: "بانک شهر",
                502806: "بانک شهر",
                502938: "بانک دی",
                603769: "بانک صادرات",
                610433: "بانک ملت",
                991975: "بانک ملت",
                627353: "بانک تجارت",
                585983: "بانک تجارت",
                589463: "بانک رفاه",
                636949: "بانک سپه",
                505416: "بانک گردشگری",
                505785: "بانک ایران زمین",
                639599: "بانک قوامین",
                627381: "بانک انصار",
                639607: "بانک سرمایه",
                502229: "بانک پاسارگاد",
                639347: "بانک پاسارگاد",
                606373: "بانک قرض‌الحسنه مهر ایران",
                504172: "بانک قرض‌الحسنه رسالت"
            },
            card_currect: false,
            card_number: "",
            bankName: "no",
            shaba_currect: false,
            shaba_number: "",
            shaba_bankName: "no",
            loading: true,
            userBankInfo: []
        }
    },
    methods: {
        check_card_number() {
            // Check Bank Name
            if (this.card_number.length >= 6) {
                let cardbank = this.card_number.substr(0, 6);
                if (this.banks[cardbank]) {
                    this.bankName = this.banks[cardbank];
                } else {
                    this.bankName = "no";
                }
            } else {
                this.bankName = "no";
            }
            // Check Card Currect
            if (this.card_number.length != 16) {
                this.card_currect = false;
                return false;
            }
            let i, tmp, sum = 0;
            for (i = 0; i < this.card_number.length; i++) {
                tmp = parseInt(this.card_number.substr(i, 1));
                if (i % 2 == 0) {
                    tmp *= 2;
                }
                if (tmp > 9) {
                    tmp -= 9;
                }
                sum += tmp;
            }
            if (sum % 10 == 0) {
                this.card_currect = true;
            } else {
                this.card_currect = false;
            }
        },
        check_shaba_number: function () {
            let tmp = "IR" + this.shaba_number;
            // Check  BankName
            // if (tmp.length >= 7) {
            //     let s = tmp.substr(4, 3);
            //     if (this.shaba_banks[s]) {
            //         this.shaba_bankName = this.shaba_banks[s];
            //     } else {
            //         this.shaba_bankName = "no";
            //     }
            // } else {
            //     this.shaba_bankName = "no";
            // }
            // Check Currect
            if (tmp.length != 26) {
                this.shaba_currect = false;
            } else {
                tmp = tmp + tmp.substr(0, 4);
                tmp = tmp.substr(4, 26);
                tmp = tmp.replace("I", "18").replace("R", "27");
                /* global BigInt */
                if (BigInt(tmp) % BigInt(97) == BigInt(1)) {
                    this.shaba_currect = true;
                } else {
                    this.shaba_currect = false;
                }
            }
        },
        changeStep(lev) {
            if (lev === 'next')
                this.step = 2;
            if (lev === 'pre')
                this.step = 1
        },
    }
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
    margin: 25px auto;
    max-width: 350px;
    box-shadow: 0 0 30px rgba(0, 0, 0, .22);
    background: linear-gradient(40deg, #155263 9%, #155263 43%, #FF6F3C calc(43% + 1px), #FF6F3C 52%, #FF9A3C calc(52% + 1px), #FF9A3C 80%, #FFC93C calc(80% + 1px), #FFC93C 100%);
    .bankname {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: right;
        transition: 0.2s;
        img {
            transition: 0.2s;
            height: 70px;
            margin: 7px 5px;
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(4.0px);
            -webkit-backdrop-filter: blur(4.0px);
            border-radius: 3px;
        }
        .no-img {
            background: transparent;
            transition: 0.2s;
        }
        .logo {
            height: 40px;
            margin-left: 10px;
            padding: 3px;
            cursor: pointer;
        }
    }
    #get-card,
    #get-shaba {
        input {
            padding-top: 12px;
            background: rgba(255, 255, 255, 0.8);
        }
    }
    .cardNumber {
        display: flex;
        width: 100%;
        text-align: center;
        margin: auto;
        direction: ltr;
        padding: 9px 0;
        border: none;
        outline: none !important;
        font-weight: bold;
        color: #777;
        box-shadow: 0 0 0 #00000033;
        z-index: 99;
        position: relative;
        @media screen and (max-width: 370px) {
            font-size: 13px;
        }
        @media screen and (max-width: 335px) {
            font-size: 12px;
        }
        @media screen and (max-width: 310px) {
            font-size: 11px;
        }
        &:placeholder-shown {
            box-shadow: 0 0 3px #00000033;
        }
    }
    .btnc {
        padding: 17px 10px 12px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            color: rgba(255, 255, 255, .8) !important;
            font-size: 11px !important;
            font-weight: bold;
        }
        .cardinvalid {
            color: red;
            font-size: 12px;
            margin-left: 7px;
        }
        #pre-level {
            margin-right: 5px;
            cursor: pointer;
            font-size: 12px !important;
            border: 2px solid rgba(255, 255, 255, .5);
            padding: 3px 8px;
            border-radius: 2px;
            transition: 0.5s;
        }
        #pre-level:hover {
            background: rgba(255, 255, 255, .2);
        }
        button {
            opacity: 0.8;
        }
    }
}
</style>