import { productsService } from '../../services/products.service'

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_FILTER_BY = 'SET_FILTER_BY'

const initialState = {
  products: [],
  isLoading: false,
  filterBy: productsService.getDefaultFilterBy()
}

export function productsReducer(state = initialState, action) {
  var newState = state
  switch (action.type) {
    case SET_PRODUCTS:
      newState = { ...state, products: action.products }
      break
    case SET_FILTER_BY:
      return { ...state, filterBy: { ...state.filterBy, ...action.filterBy } }
    default:
  }
  return newState
}
