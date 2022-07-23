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
    async addUserFiatWithdrawTransaction({}, obj) {
        await this.$apiRun({auth: true , method: 'user_fiat_transaction_withdraw_add' , vars: `?user_bank_account=${obj.userBank}&amount=${obj.amount}&code=${obj.code}&code_token=${obj.token}` , mut: ''})
    },
    async getUserCurrencyTransaction({}) {
        await this.$apiRun({auth: true , method: 'user_crypto_transaction_list' , vars: `` , mut: 'transaction/setUserCurrencyTransaction'})
    },
}