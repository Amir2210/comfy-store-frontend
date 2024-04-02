import { useSelector } from 'react-redux'
import { Navbar } from '../cmps/Navbar'
import { loadProducts } from '../store/actions/products.action'
import { useEffect } from 'react'
export function Products() {
  const products = useSelector((storeState) => storeState.productsModule.products)
  console.log(products)
  useEffect(() => {
    loadProducts()
      .catch((err) => {
        console.log('err', err)
      })
  }, [])
  return (
    <>
      <Navbar />
      <h1>im am products</h1>
    </>
  )
}