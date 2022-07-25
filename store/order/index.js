export const state = () => ({
    userOrders: [],
})
export const mutations = {
    setUserOrders(state, payload) {
        state.userOrders = payload.data ? payload.data : []
    },
}
export const actions = {
    async getUserOrders({}) {
        await this.$apiRun({auth: true , method: 'user_order_list_get' , vars: `` , mut: 'order/setUserOrders'})
    },
    async addUserOrder({} , obj) {
        let res = await this.$apiRun({auth: true , method: obj.method , vars: `?symbol=${obj.symbol}&quantity=${obj.quantity}&price=${obj.price}` , mut: ''})
        return res
    }
}