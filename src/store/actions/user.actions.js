import { userService } from "../../services/user.service.js"
import { SET_USER, ADD_TO_CART, SET_WATCHED_USER, CHANGE_PRODUCT_AMOUNT, REMOVE_FROM_CART } from "../reducers/user.reducer.js"
import { store } from "../store.js"

export async function loadUser(userId) {
    try {
        const user = await userService.getById(userId);
        store.dispatch({ type: SET_WATCHED_USER, user })
    } catch (err) {
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
        store.dispatch({ type: SET_USER, user: null, })
    } catch (err) {
        console.error('user actions -> Cannot logout:', err)
        throw err
    }
}


export function addToCart(product) {
    store.dispatch({
        type: ADD_TO_CART,
        product
    })
    _updateUser()
}

export function changeProductAmount(productId, amount) {
    store.dispatch({
        type: CHANGE_PRODUCT_AMOUNT,
        productId, amount
    })
    _updateUser()
}

export function removeProductFromCart(productId) {
    store.dispatch({
        type: REMOVE_FROM_CART,
        productId
    })
    _updateUser()

}

async function _updateUser() {
    try {
        const loggedInUser = store.getState().userModule.loggedInUser
        await userService.update(loggedInUser)
    } catch (error) {
        console.log('error:', error)
    }
}