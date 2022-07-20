export const state = () => ({
    userFiatTransaction: [],
    userCurrencyTransaction: [],
})
export const mutations = {
    setUserFiatTransaction(state, payload) {
        state.userFiatTransaction = payload.data ? payload.data : []
    },
    setUserCurrencyTransaction(state, payload) {
        state.userCurrencyTransaction = payload.data ? payload.data : []
    },
}
export const actions = {
    async getUserFiatTransaction({}) {
        await this.$apiRun({auth: true , method: 'user_fiat_transaction_list' , vars: `` , mut: 'transaction/setUserFiatTransaction'})
    },
    async getUserCurrencyTransaction({}) {
        await this.$apiRun({auth: true , method: 'user_crypto_transaction_list' , vars: `` , mut: 'transaction/setUserCurrencyTransaction'})
    },
}