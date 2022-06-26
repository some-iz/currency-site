export const state = () => ({
    userToken: '',
    userPhone: '',
    userInfo: {},
})
export const mutations = {
    changeUserTokenAndPhone(state , payload) {
        state.userToken = payload.token;
        state.userPhone = payload.phone;
        state.storePublicToken = payload.publicToken;
    },
    logout(state, payload) {
        state.userToken = payload;
        state.userPhone = payload;
        state.authenticated = false;
        state.authenticatedSuperAdmin = false;
        state.authenticatedStoreAdmin = false;
        state.storePublicToken = 'e1dc4db22c22417e539ec22909875ef8'
        this.$cookiz.remove('token');
        this.$cookiz.remove('username');
        this.$cookiz.remove('role');
        this.$cookiz.remove('public_token');
        this.$router.push('/login')
    },
}
export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('pageData/getDashboardPageData')
    },
    async getUserInfo() {
        const res = await this.$apiRun({auth: true , havePublicToken: true , method: 'user_info_get' , vars: `&access_level=OWNER` , mut: 'setUserInfo'})
        return res
    },
}
export const getters = {
    // getLoginHistoryByPage: (state) => (start , end) => {
    //     return state.userInfo.login_history.filter((el , index) => index >= start && index <= end)
    // },
    // getOrdersByPage: (state) => (start , end) => {
    //     return state.userInfo.orders.value.filter((el , index) => index >= start && index <= end)
    // },
    // getTicketsByPage: (state) => (start , end) => {
    //     return state.userInfo.tickets.value.filter((el , index) => index >= start && index <= end)
    // }
}