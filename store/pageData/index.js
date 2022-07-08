export const state = () => ({
    dashboardPageData: {},
    haveDashboardPageData: false,
})
export const mutations = {
    changeDashboardPageData(state , payload) {
        state.dashboardPageData = payload
        state.haveDashboardPageData = true
    },

}
export const actions = {
    async getDashboardPageData({ commit, state }) {
        if (!state.haveDashboardPageData) {
            const url = process.env.NODE_ENV === 'production' ?
                        'https://currency.joorweb.com/var/dashboard.json' :
                        'http://localhost:3000/var/dashboard.json';
            const data = await fetch(url)
            commit('changeDashboardPageData', await data.json());
        }
    },
}