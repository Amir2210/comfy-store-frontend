import { featuredProductsService } from '../../services/featuredProducts.service'
import { store } from '../store'
import { SET_IS_LOADING, SET_FEATURED_PRODUCTS } from '../reducers/featuredProducts.reducer'

export async function loadFeaturedProducts() {
  store.dispatch({ type: SET_IS_LOADING, isLoading: true })
  try {
    try {
      const featuredProducts = await featuredProductsService.query()
      store.dispatch({ type: SET_FEATURED_PRODUCTS, featuredProducts })
    } catch (err) {
      console.log('item action -> Cannot load featuredProducts', err)
      throw err
    }
  } finally {
    store.dispatch({ type: SET_IS_LOADING, isLoading: false })
  }
}