//featuredProducts
export const SET_FEATURED_PRODUCTS = 'SET_FEATURED_PRODUCTS'


// loading
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
  featuredProducts: [],
  isLoading: false,
}

export function featuredProductsReducer(state = initialState, action) {
  var newState = state
  switch (action.type) {
    case SET_FEATURED_PRODUCTS:
      newState = { ...state, featuredProducts: action.featuredProducts }
      break;

    default:
  }
  return newState
}
