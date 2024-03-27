import { combineReducers, createStore } from 'redux'

import { featuredProductsReducer } from './reducers/featuredProducts.reducer'

const rootReducer = combineReducers({
  featuredProductsModule: featuredProductsReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
store.subscribe(() => {
  console.log('Current state is:', store.getState())
})
