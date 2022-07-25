export const state = () => ({
    currencyList: [],
    currencyListWithoutToman: [],
    tomanList: [],
    currencyNetWork: []
})
export const mutations = {
    setCurrencyList(state, payload) {
        state.tomanList = []
        state.currencyListWithoutToman = []
        state.currencyList = payload
        payload.map((el) =>{
            if (el.fa_name === 'تومان')
                state.tomanList.push(el)
            else
                state.currencyListWithoutToman.push(el)
        })
    },
    setCurrencyNetWork(state, payload) {
        state.currencyNetWork = payload.data ? payload.data : []
    },
}
export const actions = {
    async getCurrencyList({}) {
        await this.$apiRun({auth: false , method: 'currency_get_list' , vars: `` , mut: 'currency/setCurrencyList'})
    },
    async getCurrencyNetWork({} , currency) {
        let res = await this.$apiRun({auth: true , method: 'currencies_network' , vars: `?coin=${currency}` , mut: 'currency/setCurrencyNetWork'})
        return res
    },
}