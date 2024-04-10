
import { httpService } from './http.service.js'

const BASE_URL = 'auth/'
const STORAGE_KEY_LOGGEDIN = 'loggedInUser'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
export const userService = {
    login,
    logout,
    signup,
    getloggedInUser,
    getUsers,
    getById,
    update
}

window.us = userService

function getUsers() {
    return httpService.get(`user`)
}

async function getById(userId) {
    const user = await httpService.get(`user/${userId}`)
    return user
}

async function login({ username, password }) {
    const user = await httpService.post(BASE_URL + 'login', { username, password })
    if (user) return _setloggedInUser(user)
}

async function signup({ username, password, fullname }) {
    const user = { username, password, fullname, cart: [] }
    const savedUser = httpService.post(BASE_URL + 'signup', user)
    if (savedUser) return _setloggedInUser(savedUser)
}

async function logout() {
    await httpService.post(BASE_URL + 'logout')
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
}

function _setloggedInUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user
}

async function update({ _id, cart }) {
    console.log('cart:', cart)
    const user = await httpService.put(`user/${_id}`, { _id, cart })
    if (getloggedInUser()._id === user._id) saveLocalUser(user)
    return user
}

function getloggedInUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function saveLocalUser(user) {
    user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, score: user.score }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}






