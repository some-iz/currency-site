<template>
    <div class="personal-info row mt-4 pt-2 pt-md-0 mt-md-5 px-0 px-md-2 px-lg-4">
        <div class="col-md-7">
            <div class="d-flex mb-3">
                <label class="w-100 font-weight-bold ml-2">
                    استان :
                    <select v-model="provinceId" class="input-form w-100 mt-1 px-1" name="" id="">
                        <option value="">شهر یک</option>
                    </select>
                </label>
                <label class="w-100 font-weight-bold">
                    شهر :
                    <select v-model="cityId" class="input-form w-100 mt-1 px-1" name="" id="">
                        <option value="">شهر یک</option>
                    </select>
                </label>
            </div>
            <label class="w-100 mb-3 font-weight-bold">
                کدپستی :
                <input v-model="postalCode" class="input-form w-100 mt-1" type="text" />
            </label>
            <label class="w-100 mb-3 font-weight-bold">
                آدرس :
                <textarea v-model="address" class="input-form w-100 mt-1" rows="3"></textarea>
            </label>
            <label class="w-100 mb-3 font-weight-bold">
                شماره تلفن ثابت :
                <input v-model="phoneNumber" class="input-form w-100 mt-1" type="text" />
            </label>
            <Btn class="mt-4 py-2 rounded font-weight-bold" width="full" size="small">ثبت آدرس</Btn>
        </div>
        <user-info-img width="col-md-5" :status="1" title="در انتظار ثبت آدرس..." imgSrc="/img/auth/location.png"
            imgAlt="address"></user-info-img>
    </div>
</template>

<script>
import Btn from './btn.vue'
import UserInfoImg from './userInfoImg.vue'
export default {
    layout: 'dashboard',
    components: {
        Btn,
        UserInfoImg
    },
    props: [],
    data() {
        return {
        }
    },
    computed: {
        provinceId: {
            get() {
                return this.$store.state.userInfo.address[0].province_id
            },
            set(value) {
                this.$store.commit('updateUserAddress', { val: value, id: 'province_id' })
            }
        },
        cityId: {
            get() {
                return this.$store.state.userInfo.address[0].city_id
            },
            set(value) {
                this.$store.commit('updateUserAddress', { val: value, id: 'city_id' })
            }
        },
        address: {
            get() {
                return this.$store.state.userInfo.address[0].address
            },
            set(value) {
                this.$store.commit('updateUserAddress', { val: value, id: 'address' })
            }
        },
        postalCode: {
            get() {
                return this.$store.state.userInfo.address[0].postal_code
            },
            set(value) {
                this.$store.commit('updateUserAddress', { val: value, id: 'postal_code' })
            }
        },
        phoneNumber: {
            get() {
                return this.$store.state.userInfo.address[0].phone_number
            },
            set(value) {
                this.$store.commit('updateUserAddress', { val: value, id: 'phone_number' })
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.personal-info{
  >div{
    label , div{
      font-size: 13px;
      color: $black-600;
    }
  }
}
</style>