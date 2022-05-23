import axios from "axios";
export default (context, inject) => {
    const apiRun = async (obj) => {
        // auth => Method is Private or Not? (have two value => true or false)
        // haveToken => Need Public-Token or Not? (have two value => true or false)
        // method => name of API Methods
        // vars => API query - (like this => ?name=reza&lastname=soume)
        // mut => name of mutations in Vuex with path - (like this => 'currency/setCurrency')
        axios.defaults.baseURL = "https://joorweb.ir/";
        let url = '';
        if (obj.auth === true) {
            url += context.store.state.userToken + "/";
        }
        url += obj.method;
        url += obj.vars;
        
        const res = await axios.post(url)
        if (obj.mut !== '' && obj.mut && JSON.parse(res.data.ok))
            context.store.commit(`${obj.mut}`, res.data);
        if (!JSON.parse(res.data.ok))
            console.log('test')
            
        return res.data
    }
        
    // Inject this.$apiRun({ auth: false, havePublicToken: true, method: 'goods_list_get', vars: '' , mut: '' })
    // in Vue, context and store...
    inject('apiRun', apiRun)
}