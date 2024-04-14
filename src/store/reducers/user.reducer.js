import { userService } from "../../services/user.service.js"
/// user
export const SET_USER = 'SET_USER'
export const SET_WATCHED_USER = 'SET_WATCHED_USER'
//CART
export const ADD_TO_CART = 'ADD_TO_CART'
export const CHANGE_PRODUCT_AMOUNT = 'CHANGE_PRODUCT_AMOUNT'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

//anonymousCart
export const ADD_TO_ANONYMOUS_CART = 'ADD_TO_ANONYMOUS_CART'
const initialState = {
    loggedInUser: userService.getloggedInUser(),
    anonymousCart: []
}

export function userReducer(state = initialState, action = {}) {
    let userCart
    let productToSave
    switch (action.type) {
        // user
        case SET_USER:
            return { ...state, loggedInUser: action.user }

        case ADD_TO_CART:
            userCart = [...state.loggedInUser.cart]
            productToSave = {
                category: action.product.category,
                color: action.product.color,
                amount: action.product.amount,
                company: action.product.company,
                description: action.product.description,
                image: action.product.image,
                price: action.product.price,
                shipping: action.product.shipping,
                title: action.product.title,
                _id: action.product._id
            }
            userCart.push(productToSave)
            return {
                ...state,
                loggedInUser: { ...state.loggedInUser, cart: userCart }
            }

        case CHANGE_PRODUCT_AMOUNT:
            userCart = [...state.loggedInUser.cart]
            const productToChangeIdx = userCart.findIndex(product => action.productId === product._id)
            const productToChange = userCart.find(product => action.productId === product._id)
            productToChange.amount = action.amount
            userCart.splice(productToChangeIdx, 1, productToChange)
            return {
                ...state,
                loggedInUser: { ...state.loggedInUser, cart: userCart }
            }
        case REMOVE_FROM_CART:
            userCart = [...state.loggedInUser.cart]
            userCart = userCart.filter(product => product._id !== action.productId)
            return {
                ...state,
                loggedInUser: { ...state.loggedInUser, cart: userCart }
            }
        //anonymousCart
        case ADD_TO_ANONYMOUS_CART:
            return {
                ...state,
                anonymousCart: [...state.anonymousCart, { ...action.product }]
            }
        default:
            return state
    }
}
