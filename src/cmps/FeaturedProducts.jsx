import { useSelector } from 'react-redux'
import { loadFeaturedProducts } from '../store/actions/featuredProducts.action'
import { useEffect } from 'react'
export function FeaturedProducts() {
  const featuredProducts = useSelector((storeState) => storeState.featuredProductsModule.featuredProducts)
  console.log('featuredProducts:', featuredProducts)

  useEffect(() => {
    loadFeaturedProducts()
      .catch((err) => {
        console.log('err', err)
      })
  }, [])
  return (
    <section className='align-elemets mt-6'>
      <h1 className='text-bold text-4xl'>Featured Products</h1>
      <div className='w-full h-1 bg-secondary mt-4'></div>
    </section>
  )
}