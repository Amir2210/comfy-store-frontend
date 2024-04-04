import { httpService } from './http.service.js'

export const productsService = {
  query,
  getById,
  getDefaultFilterBy,
  getDefaultSort,
}

function query(filterBy, sortBy) {
  return httpService.get('product', { params: { filterBy, sortBy } })
}

function getById(productId) {
  return httpService.get(`product/${productId}`)
}


function getDefaultFilterBy() {
  return {
    txt: '',
    category: '',
    company: '',
    maxPrice: 10000,
    freeShipping: ''
  }
}

function getDefaultSort() {
  return {
    by: '',
  }
}