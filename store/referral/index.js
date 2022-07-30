export const state = () => ({
    userReferral: [],
    allStatistics: {
        number: 0,
        trade: 0,
        tradePercentage: 0
    }
})
export const mutations = {
    setUserReferral(state, payload) {
        state.userReferral = payload.data.sort((a, b) => a.subset_profit - b.subset_profit);
        state.allStatistics.number = 0
        state.allStatistics.trade = 0
        state.allStatistics.tradePercentage = 0
        payload.data.map((el) => {
            state.allStatistics.number += el.referral_count
            state.allStatistics.trade += el.transaction_referral_count
            state.allStatistics.tradePercentage += el.profit_referral_code
        })
    },
}
export const actions = {
    async getUserReferral({ }) {
        let res = await this.$apiRun({ auth: true, method: 'user_referral_code_list', vars: '', mut: 'referral/setUserReferral' })
        return res
    },
    async generateReferral({ } , percentage) {
        let res = await this.$apiRun({ auth: true, method: 'user_referral_code_generate', vars: `?user_profit=${percentage}&subset_profit=${30 - percentage}`, mut: '' })
        return res
    },
}