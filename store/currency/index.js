export const state = () => ({
    currencyList: [],
    currencyListWithoutToman: [],
    tomanList: []
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
}
export const actions = {
    async getCurrencyList({}) {
        await this.$apiRun({auth: false , method: 'currency_get_list' , vars: `` , mut: 'currency/setCurrencyList'})
    },
}