import { httpService } from './http.service.js'

export const featuredProducts = {
  query
}

function query() {
  return httpService.get('featuredProducts')
}