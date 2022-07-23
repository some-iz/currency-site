export const state = () => ({
    userToken: '',
    userPhone: '',
    authenticated: false,
    userInfo: {},
})
export const mutations = {
    changeUserTokenAndPhone(state , payload) {
        state.userToken = payload.token;
        state.userPhone = payload.phone;
    },
    logout(state, payload) {
        state.userToken = payload;
        state.userPhone = payload;
        state.authenticated = false;
        this.$cookiz.remove('token');
        this.$cookiz.remove('username');
        this.$router.push('/')
    },
    setUserAuthenticated(state , payload) {
        state.authenticated = payload
    },
    setUserInfo(state, payload) {
        state.userInfo = payload.data
    },
    updateUserInfo(state, payload) {
        state.userInfo.info[0][payload.id]= payload.val
    },
    updateUserAddress(state, payload) {
        state.userInfo.address[0][payload.id]= payload.val
    },
}
export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('pageData/getDashboardPageData')
    },
    async getUserInfo() {
        const res = await this.$apiRun({auth: true , method: 'user_info_get' , vars: `` , mut: 'setUserInfo'})
        return res
    },
    async setUserInfo({ state }) {
        const res = await this.$apiRun({auth: true , method: 'user_info_set' , vars: `?name=${state.userInfo.info[0].name}&lastname=${state.userInfo.info[0].lastname}&birthday=${state.userInfo.info[0].birthday}&father_name=${state.userInfo.info[0].father_name}&national_id=${state.userInfo.info[0].national_id}` , mut: ''})
        return res
    },
    async setAddressInfo({ state }) {
        const res = await this.$apiRun({auth: true , method: 'address_set' , vars: `?province=${state.userInfo.address[0].province_id}&city=${state.userInfo.address[0].city_id}&address=${state.userInfo.address[0].address}&postal=${state.userInfo.address[0].postal_code}&phone_number=${state.userInfo.address[0].phone_number}` , mut: ''})
        return res
    },
}
export const getters = {
    // getPersonalUserInfo(state) {
    //     return state
    // }
}