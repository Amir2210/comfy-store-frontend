import { productsService } from '../../services/products.service'
import { store } from '../store'
import { SET_IS_LOADING, SET_PRODUCTS, SET_FILTER_BY, SET_SORT_BY, SET_TOTAL_ITEMS_COUNT } from '../reducers/products.reducer'

export async function loadProducts() {
  store.dispatch({ type: SET_IS_LOADING, isLoading: true })
  const filterBy = store.getState().productsModule.filterBy
  const sortBy = store.getState().productsModule.sortBy

  try {
    try {
      const { products, totalItems } = await productsService.query(filterBy, sortBy)
      store.dispatch({ type: SET_PRODUCTS, products, })
      store.dispatch({ type: SET_TOTAL_ITEMS_COUNT, totalItems })
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

