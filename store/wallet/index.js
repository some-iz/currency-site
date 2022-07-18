export const state = () => ({
    userWallet: []
})
export const mutations = {
    setUserWallet(state, payload) {
        state.userWallet = payload.data
    },
}
export const actions = {
    async getUserWallet({}) {
        await this.$apiRun({auth: true , method: 'user_wallet_balance' , vars: `` , mut: 'wallet/setUserWallet'})
    },
}