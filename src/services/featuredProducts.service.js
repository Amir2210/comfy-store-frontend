import { httpService } from './http.service.js'

export const featuredProductsService = {
  query,
  getById
}

function query() {
  return httpService.get('featuredProduct')
}

function getById(productId) {
  return httpService.get(`featuredProduct/${productId}`)
}