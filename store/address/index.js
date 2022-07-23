export const state = () => ({
    bankAddress: [],
    currencyAddress: [],
})
export const mutations = {
    setBankAddress(state, payload) {
        state.bankAddress = payload.data
    },
    setCurrencyAddress(state, payload) {
        state.currencyAddress = payload.data
    },
}
export const actions = {
    async getBankAddress({}) {
        await this.$apiRun({auth: true , method: 'user_bank_account_get' , vars: `` , mut: 'address/setBankAddress'})
    },
    async addBankAddress({} , obj) {
        let res = await this.$apiRun({auth: true , method: 'user_bank_account_add' , vars: `?card_number=${obj.card}&shaba_number=${obj.sheba}&bank_name=${obj.name}` , mut: 'address/setBankAddress'})
        return res
    },
    async getCurrencyAddress({ }) {
        await this.$apiRun({auth: true , method: 'city_list_get' , vars: `` , mut: 'address/setCurrencyAddress'})
    },
}