import { useSelector } from 'react-redux'
import { loadFeaturedProducts } from '../store/actions/featuredProducts.action'
import { useEffect } from 'react'
import { FeaturedProductsPreview } from './FeaturedProductsPreview'
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
      <div className='pt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {featuredProducts.map(product => <FeaturedProductsPreview key={product._id} product={product} />)}
      </div>
    </section>
  )
}