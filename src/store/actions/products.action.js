import { productsService } from '../../services/products.service'
import { store } from '../store'
import { SET_IS_LOADING, SET_PRODUCTS, SET_FILTER_BY, SET_SORT_BY } from '../reducers/products.reducer'

export async function loadProducts() {
  store.dispatch({ type: SET_IS_LOADING, isLoading: true })
  const filterBy = store.getState().productsModule.filterBy
  const sortBy = store.getState().productsModule.sortBy
  try {
    try {
      const products = await productsService.query(filterBy, sortBy)
      store.dispatch({ type: SET_PRODUCTS, products })
    } catch (err) {
      console.log('item action -> Cannot load products', err)
      throw err
    }
  } finally {
    store.dispatch({ type: SET_IS_LOADING, isLoading: false })
  }
}


export function setFilterBy(filterBy) {
  store.dispatch({ type: SET_FILTER_BY, filterBy })
}

export function setSortBy(sortBy) {
  store.dispatch({ type: SET_SORT_BY, sortBy })
}