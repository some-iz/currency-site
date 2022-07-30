export const state = () => ({
    bankAddress: [],
    defaultDepositCurrencyAddress: {}
})
export const mutations = {
    setBankAddress(state, payload) {
        state.bankAddress = payload.data ? payload.data : []
    },
    setDefaultDepositCurrencyAddress(state, payload) {
        state.defaultDepositCurrencyAddress = payload.data ? payload.data[0] : []
    },
}
export const actions = {
    async getBankAddress({}) {
        await this.$apiRun({auth: true , method: 'user_bank_account_get' , vars: `` , mut: 'address/setBankAddress'})
    },
    async getDefaultDepositCurrencyAddress({} ,symbol) {
        let res = await this.$apiRun({auth: true , method: 'user_currencies_address_default_deposit_list_get' , vars: `?symbol=${symbol}` , mut: 'address/setDefaultDepositCurrencyAddress'})
        return res
    },
    async addBankAddress({} , obj) {
        let res = await this.$apiRun({auth: true , method: 'user_bank_account_add' , vars: `?card_number=${obj.card}&shaba_number=${obj.sheba}&bank_name=${obj.name}` , mut: 'address/setBankAddress'})
        return res
    },
    async deleteBankAddress({ }, id) {
        let res = await this.$apiRun({auth: true , method: 'user_bank_account_remove' , vars: `?id=${id}` , mut: ''})
        return res
    }
}