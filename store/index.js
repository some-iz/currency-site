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
        const res = await this.$apiRun({auth: true , havePublicToken: true , method: 'user_info_get' , vars: `` , mut: 'setUserInfo'})
        return res
    },
}
export const getters = {
    // getPersonalUserInfo(state) {
    //     return state
    // }
}