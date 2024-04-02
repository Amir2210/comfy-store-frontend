import { combineReducers, createStore } from 'redux'

import { featuredProductsReducer } from './reducers/featuredProducts.reducer'
import { productsReducer } from './reducers/products.reducer'

const rootReducer = combineReducers({
  featuredProductsModule: featuredProductsReducer,
  productsModule: productsReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
store.subscribe(() => {
  console.log('Current state is:', store.getState())
})
