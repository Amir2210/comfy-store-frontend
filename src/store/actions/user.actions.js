import { userService } from "../../services/user.service.js"
import { SET_USER, ADD_TO_CART } from "../reducers/user.reducer.js"
import { store } from "../store.js"





export async function loadUser(userId) {
    try {
        const user = await userService.getById(userId);
        store.dispatch({ type: SET_WATCHED_USER, user })
    } catch (err) {
        showErrorMsg('Cannot load user')
        console.log('Cannot load user', err)
    }
}

export async function login(credentials) {
    try {
        const user = await userService.login(credentials)
        store.dispatch({ type: SET_USER, user })
        return user
    } catch (err) {
        console.log('user actions -> Cannot login', err)
        throw err
    }
}

export async function signup(credentials) {
    try {
        const user = await userService.signup(credentials)
        store.dispatch({ type: SET_USER, user })
        return user
    } catch (err) {
        console.log('user actions -> Cannot signup', err)
        throw err
    }
}

export async function logout() {
    try {
        await userService.logout()
        store.dispatch({ type: SET_USER, user: null })
    } catch (err) {
        console.error('user actions -> Cannot logout:', err)
        throw err
    }
}


export async function addToCart(product) {
    store.dispatch({
        type: ADD_TO_CART,
        product
    })
    try {
        const loggedInUser = store.getState().userModule.loggedInUser
        const updatedCart = [...loggedInUser.cart]
        await userService.update({ _id: loggedInUser._id, cart: updatedCart })
    } catch (error) {
        console.log('error:', error)
    }
}
