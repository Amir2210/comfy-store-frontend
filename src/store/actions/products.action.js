import { productsService } from '../../services/products.service'
import { store } from '../store'
import { SET_IS_LOADING, SET_PRODUCTS } from '../reducers/products.reducer'

export async function loadProducts() {
  store.dispatch({ type: SET_IS_LOADING, isLoading: true })
  try {
    try {
      const products = await productsService.query()
      store.dispatch({ type: SET_PRODUCTS, products })
    } catch (err) {
      console.log('item action -> Cannot load products', err)
      throw err
    }
  } finally {
    store.dispatch({ type: SET_IS_LOADING, isLoading: false })
  }
}