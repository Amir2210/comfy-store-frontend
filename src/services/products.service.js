import { httpService } from './http.service.js'

export const productsService = {
  query,
  getById
}

function query() {
  return httpService.get('product')
}

function getById(productId) {
  return httpService.get(`product/${productId}`)
}