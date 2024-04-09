import { useSelector } from 'react-redux'
import { loadFeaturedProducts } from '../store/actions/featuredProducts.action'
import { useEffect } from 'react'
import { FeaturedProductsPreview } from './FeaturedProductsPreview'
import { toast } from 'react-toastify'
// LOADER
import { RotatingTriangles } from 'react-loader-spinner'

export function FeaturedProducts() {
  const featuredProducts = useSelector((storeState) => storeState.featuredProductsModule.featuredProducts)
  const isLoading = useSelector((storeState) => storeState.featuredProductsModule.isLoading)
  useEffect(() => {
    loadFeaturedProducts()
      .catch((err) => {
        toast.error(`failed to load Featured Products`)
      })
  }, [])
  return (
    <section className='align-elemets my-6'>
      <h1 className='text-bold text-4xl'>Featured Products</h1>
      <div className='w-full h-1 bg-secondary mt-4'></div>
      <div className='pt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {!isLoading && featuredProducts.map(product => <FeaturedProductsPreview key={product._id} product={product} />)}
        {isLoading && <RotatingTriangles
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="rotating-triangles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />}
      </div>
    </section>
  )
}