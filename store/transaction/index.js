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
        let res = await this.$apiRun({auth: true , method: 'user_fiat_transaction_withdraw_add' , vars: `?user_bank_account=${obj.userBank}&amount=${obj.amount}&code=${obj.code}&code_token=${obj.token}` , mut: ''})
        return res
    },
    async addUserFiatDepositTransaction({}, obj) {
        let res = await this.$apiRun({auth: true , method: 'user_fiat_payment_gateway_deposit_add' , vars: `?card_number=${obj.userBank}&amount=${obj.amount}` , mut: ''})
        return res
    },
    async getUserCurrencyTransaction({}) {
        await this.$apiRun({auth: true , method: 'user_crypto_transaction_list' , vars: `` , mut: 'transaction/setUserCurrencyTransaction'})
    },
    async addUserCurrencyTransactionWithdraw({} , obj) {
        let res = await this.$apiRun({auth: true , method: 'user_transaction_withdraw_add' , vars: `?user_address=${obj.address}&symbol=${obj.symbol}&network=${obj.network}&tag=${obj.tag}&amount=${obj.amount}&code=${obj.code}&code_token=${obj.token}` , mut: ''})
        return res
    },
    async addUserCurrencyTransactionDeposit({} , obj) {
        let res = await this.$apiRun({auth: true , method: 'user_transaction_deposit_add' , vars: `?system_address=${obj.address}&symbol=${obj.symbol}&network=${obj.network}&amount=${obj.amount}&txid=${obj.tx}` , mut: ''})
        return res
    },
}