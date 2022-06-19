export const state = () => ({
    currencyList: []
})
export const mutations = {
    setCurrencyList(state, payload) {
        state.currencyList = payload
    },
}
export const actions = {
    async getCurrencyList({}) {
        await this.$apiRun({auth: false , method: 'currency_get_list' , vars: `` , mut: 'currency/setCurrencyList'})
    },
}