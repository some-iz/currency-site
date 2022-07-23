export const state = () => ({
    provinceList: [],
    cityList: [],
})
export const mutations = {
    setProvinceList(state, payload) {
        state.provinceList = payload.data
    },
    setCityList(state, payload) {
        state.cityList = payload.data
    },
}
export const actions = {
    async getProvinceList({}) {
        await this.$apiRun({auth: false , method: 'province_list_get' , vars: `` , mut: 'areas/setProvinceList'})
    },
    async getCityList({ }, id) {
        await this.$apiRun({auth: false , method: 'city_list_get' , vars: `?province=${id}` , mut: 'areas/setCityList'})
    },
}