import { productsService } from '../../services/products.service'

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_SORT_BY = 'SET_SORT_BY'
export const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT';
const initialState = {
  products: [],
  isLoading: false,
  filterBy: productsService.getDefaultFilterBy(),
  sortBy: productsService.getDefaultSort(),
  totalItems: 0
}

export function productsReducer(state = initialState, action) {
  var newState = state
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products, }
      break
    case SET_FILTER_BY:
      return { ...state, filterBy: { ...state.filterBy, ...action.filterBy } }
    case SET_SORT_BY:
      return { ...state, sortBy: { ...state.sortBy, ...action.sortBy } }
    case SET_TOTAL_ITEMS_COUNT:
      return { ...state, totalItems: action.totalItems }
    default:
  }
  return newState
}
