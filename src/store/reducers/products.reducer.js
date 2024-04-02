//featuredProducts
export const SET_PRODUCTS = 'SET_PRODUCTS'


// loading
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
  products: [],
  isLoading: false,
}

export function productsReducer(state = initialState, action) {
  var newState = state
  switch (action.type) {
    case SET_PRODUCTS:
      newState = { ...state, products: action.products }
      break;

    default:
  }
  return newState
}
