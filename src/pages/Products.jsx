import { useSelector } from 'react-redux'
import { Navbar } from '../cmps/Navbar'
import { loadProducts } from '../store/actions/products.action'
import { useEffect, useState } from 'react'

//ICONS
import { IoGrid } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


export function Products() {
  const products = useSelector((storeState) => storeState.productsModule.products)
  const isLoading = useSelector((storeState) => storeState.productsModule.isLoading)
  const [layout, setLayout] = useState('grid')

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
        <div className='flex justify-between'>
          <h2 className='text-xl font-medium'>{!isLoading && products.length} {products.length <= 1 ? 'product' : 'products'}</h2>
          <div>
            <button onClick={() => setLayout('grid')} className={`text-xl btn btn-circle btn-sm mr-2 ${layout === 'grid' && 'btn-primary'}`}><IoGrid /></button>
            <button onClick={() => setLayout('list')} className={`text-xl btn btn-circle btn-sm ${layout === 'list' && 'btn-primary'}`}><RxHamburgerMenu /></button>
          </div>
        </div>
        <div className='w-full h-1 bg-secondary mt-4'></div>

      </section>
    </>
  )
}