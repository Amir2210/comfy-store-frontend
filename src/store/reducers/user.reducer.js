import { userService } from "../../services/user.service.js"
/// user
export const SET_USER = 'SET_USER'
export const SET_WATCHED_USER = 'SET_WATCHED_USER'
//CART
export const ADD_TO_CART = 'ADD_TO_CART'

const initialState = {
    loggedInUser: userService.getloggedInUser(),
}

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        // user
        case SET_USER:
            return { ...state, loggedInUser: action.user }
        case ADD_TO_CART:
            const userCart = [...state.loggedInUser.cart]
            const productToSave = {
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
        default:
            return state
    }
}
