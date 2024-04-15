import { storageService } from './async-storage.service.js'
const STORAGE_KEY = 'anonymosCartDB'

export const anonymousCartService = {
  query,
  save,
}

async function query() {
  try {
    const products = await storageService.query(STORAGE_KEY)
    return products
  } catch (error) {
    console.error('Error querying items:', error)
  }
}

async function save(product) {
  // delete product._id
  var savedProduct
  if (product.id) {
    console.log('in')
    savedProduct = await storageService.put(STORAGE_KEY, product)
  } else {
    console.log('elese')
    savedProduct = await storageService.post(STORAGE_KEY, product)
  }
  return savedProduct
}