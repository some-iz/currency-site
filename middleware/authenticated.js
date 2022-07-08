export default async function ({ store, redirect , app }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    if (app.$cookiz.get('username') && app.$cookiz.get('token')) {
      store.commit('changeUserTokenAndPhone', {token: app.$cookiz.get('token'), phone: app.$cookiz.get('username'),})
      const res = await store.dispatch('getUserInfo')
      if (JSON.parse(res.ok) === false) {
        store.commit('logout' , '')
        return redirect('/')
      } 
      else { 
        store.commit('setUserAuthenticated', true)
      }
    } 
    else {
      store.commit('logout' , '')
      return redirect('/') 
    }
  }
}