import { userService } from "../../services/user.service.js"
/// user
export const SET_USER = 'SET_USER'
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
            userCart.push(action.product)
            return {
                ...state,
                loggedInUser: { ...state.loggedInUser, cart: userCart }
            }
        default:
            return state
    }
}
