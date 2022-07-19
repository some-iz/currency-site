export const state = () => ({
    userFiatTransaction: []
})
export const mutations = {
    setUserFiatTransaction(state, payload) {
        state.userFiatTransaction = payload.data
    },
}
export const actions = {
    async getUserFiatTransaction({}) {
        await this.$apiRun({auth: true , method: 'user_fiat_transaction_list' , vars: `` , mut: 'transaction/setUserFiatTransaction'})
    },
}