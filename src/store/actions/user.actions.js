import { anonymousCartService } from '../../services/anonymousCartService.js';
import { userService } from "../../services/user.service.js"
import { SET_USER, ADD_TO_CART, SET_WATCHED_USER, CHANGE_PRODUCT_AMOUNT, REMOVE_FROM_CART, ADD_TO_ANONYMOUS_CART, CHANGE_PRODUCT_AMOUNT_ANONYMOUS_CART, SET_ANONYMOUS_CART, SET_IS_LOADING, REMOVE_FROM_ANONYMOUS_CART, CLEAR_CART } from "../reducers/user.reducer.js"
import { store } from "../store.js"

export async function loadUser(userId) {
    try {
        const user = await userService.getById(userId)
        store.dispatch({ type: SET_WATCHED_USER, user })
    } catch (err) {
        console.log('Cannot load user', err)
    }
}

export async function login(credentials) {
    try {
        const user = await userService.login(credentials)
        const anonymousCart = store.getState().userModule.anonymousCart
        if (anonymousCart.length > 0) {
            await userService.update({ ...user, cart: anonymousCart })
            store.dispatch({ type: SET_ANONYMOUS_CART, anonymousProductsCart: [] })
        }

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

export function clearCart() {
    store.dispatch({
        type: CLEAR_CART
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


// anonymousCart

export async function loadAnonymousProductsCart() {
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    try {
        const anonymousProductsCart = await anonymousCartService.query()
        store.dispatch({ type: SET_ANONYMOUS_CART, anonymousProductsCart })
    } catch (err) {
        console.log('item action -> Cannot load items', err)
        throw err
    }
    finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}


export async function addToAnonymousCart(product) {
    try {
        const savedProduct = await anonymousCartService.save(product)
        store.dispatch({
            type: ADD_TO_ANONYMOUS_CART,
            savedProduct
        })
    } catch (error) {
        console.log('error:', error)
    }
}

export async function changeAnonymousCartProductAmount(productId, amount) {
    try {
        const anonymousProductToChangeIdx = store.getState().userModule.anonymousCart.findIndex(product => productId === product._id)
        const anonymousProductToChange = store.getState().userModule.anonymousCart.find(product => productId === product._id)
        anonymousProductToChange.amount = amount
        const savedProduct = await anonymousCartService.save(anonymousProductToChange)
        store.dispatch({
            type: CHANGE_PRODUCT_AMOUNT_ANONYMOUS_CART,
            savedProduct, anonymousProductToChangeIdx
        })
    } catch (error) {
        console.log('error:', error)
    }
}

export async function removeProductFromAnonymousCart(productId) {
    try {
        await anonymousCartService.remove(productId)
        store.dispatch({
            type: REMOVE_FROM_ANONYMOUS_CART,
            productId
        })
    } catch (error) {
        console.log('error:', error)
    }
}