export default function ({ store, redirect , app }) {
    // check user login or not
    app.$cookiz.remove('token', { path: '/login' })
    app.$cookiz.remove('username', { path: '/login' })
    if (app.$cookiz.get('username') && app.$cookiz.get('token')) {
        store.commit('changeUserTokenAndPhone' , {token: app.$cookiz.get('token' , {path : '/'}) , phone: app.$cookiz.get('username' , {path : '/'})})
        return redirect('/dashboard')
    }
}