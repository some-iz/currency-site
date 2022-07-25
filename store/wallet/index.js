export const state = () => ({
    userWallet: [],
    userFavFiatWallet: []
})
export const mutations = {
    setUserWallet(state, payload) {
        state.userWallet = payload.data ? payload.data : []
    },
    setUserFavFiatWallet(state, payload) {
        state.userFavFiatWallet = payload.data ? payload.data : []
    },
}
export const actions = {
    async getUserWallet({}) {
        await this.$apiRun({auth: true , method: 'user_wallet_balance' , vars: `` , mut: 'wallet/setUserWallet'})
    },
    async getUserFavFiatWallet({}) {
        await this.$apiRun({auth: true , method: 'user_saved_currency_address_get' , vars: `` , mut: 'wallet/setUserFavFiatWallet'})
    },
    async addUserFavFiatWallet({ }, obj) {
        let res = await this.$apiRun({auth: true , method: 'user_saved_currency_address_add' , vars: `?symbol=${obj.symbol}&address=${obj.address}&tag=${obj.tag}&network=${obj.network.network}&label=${obj.label}` , mut: ''})
        return res
    }
}