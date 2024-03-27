import { httpService } from './http.service.js'

export const featuredProductsService = {
  query
}

function query() {
  return httpService.get('featuredProducts')
}