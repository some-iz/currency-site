export const state = () => ({

})
export const mutations = {

}
export const actions = {
    async mainUploader({ }, obj) {
        let res = await this.$apiRun({ auth: true, method: obj.method, vars: `?image_token=${obj.imgToken}`, mut: '' })
        return res
    },
}