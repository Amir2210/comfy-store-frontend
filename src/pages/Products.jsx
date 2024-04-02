import { useSelector } from 'react-redux'
import { Navbar } from '../cmps/Navbar'
import { loadProducts } from '../store/actions/products.action'
import { useEffect } from 'react'
export function Products() {
  const products = useSelector((storeState) => storeState.productsModule.products)
  const isLoading = useSelector((storeState) => storeState.productsModule.isLoading)
  console.log(isLoading)
  useEffect(() => {
    loadProducts()
      .catch((err) => {
        console.log('err', err)
      })
  }, [])
  return (
    <>
      <Navbar />
      <section className='align-elemets mt-6'>
        <div className='flex'>
          <div>{products.length} products</div>
        </div>
      </section>
    </>
  )
}