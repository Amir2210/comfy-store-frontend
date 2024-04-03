import { productsService } from '../../services/products.service'
import { store } from '../store'
import { SET_IS_LOADING, SET_PRODUCTS, SET_FILTER_BY } from '../reducers/products.reducer'

export async function loadProducts(sort) {
  store.dispatch({ type: SET_IS_LOADING, isLoading: true })
  const filterBy = store.getState().productsModule.filterBy
  try {
    try {
      const products = await productsService.query(filterBy, sort)
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