import { combineReducers, createStore } from 'redux'

import { featuredProductsReducer } from './reducers/featuredProducts.reducer'
import { productsReducer } from './reducers/products.reducer'
import { userReducer } from "./reducers/user.reducer.js"
const rootReducer = combineReducers({
  featuredProductsModule: featuredProductsReducer,
  productsModule: productsReducer,
  userModule: userReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
store.subscribe(() => {
  console.log('Current state is:', store.getState())
})
