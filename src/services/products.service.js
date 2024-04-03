import { httpService } from './http.service.js'

export const productsService = {
  query,
  getById,
  getDefaultFilterBy,
  getDefaultSort,
}

function query(filterBy, sort) {
  return httpService.get('product', { params: { filterBy, sort } })
}

function getById(productId) {
  return httpService.get(`product/${productId}`)
}


function getDefaultFilterBy() {
  return {
    txt: '',
    category: '',
    company: '',
    maxPrice: Infinity,
  }
}

function getDefaultSort() {
  return {
    by: 'name',
    asc: true
  }
}