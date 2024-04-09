import { userService } from "../../services/user.service.js"
/// user
export const SET_USER = 'SET_USER'

const initialState = {
    loggedInUser: userService.getloggedInUser(),
}

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        // user
        case SET_USER:
            return { ...state, loggedInUser: action.user }
        default:
            return state
    }
}
