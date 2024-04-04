//SERVICE
import { productsService } from '../services/products.service'

import { useSelector } from 'react-redux'
import { Navbar } from '../cmps/Navbar'
import { loadProducts, setFilterBy, setSortBy } from '../store/actions/products.action'
import { useEffect, useState } from 'react'

//ICONS
import { IoGrid } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { ProductPreview } from '../cmps/productPreview';
import { FilterProduct } from '../cmps/FilterProduct';


export function Products() {
  const products = useSelector((storeState) => storeState.productsModule.products)
  const isLoading = useSelector((storeState) => storeState.productsModule.isLoading)
  const [layout, setLayout] = useState('grid')
  const filterBy = useSelector((storeState) => storeState.productsModule.filterBy)
  const sortBy = useSelector((storeState) => storeState.productsModule.sortBy)
  console.log('sortBy:', sortBy)
  // const [sort, setSort] = useState(productsService.getDefaultSort())
  // console.log(products)




  useEffect(() => {
    loadProducts()
      .catch((err) => {
        console.log('err', err)
      })
  }, [filterBy, sortBy])

  function onSetFilter(filterBy) {
    setFilterBy(filterBy)
  }

  function onSetSort(sortBy) {
    console.log('sorttt', sortBy)
    setSortBy(sortBy)
  }


  return (
    <>
      <Navbar />
      <FilterProduct filterBy={filterBy} onSetFilter={onSetFilter} sortBy={sortBy} onSetSort={onSetSort} />
      <section className='align-elemets mt-6'>
        <div className='flex justify-between'>
          <h2 className='text-xl font-medium'>{!isLoading && products.length} {products.length <= 1 ? 'product' : 'products'}</h2>
          <div className='hidden sm:block'>
            <button onClick={() => setLayout('grid')} className={`text-xl btn btn-circle btn-sm mr-2 ${layout === 'grid' && 'btn-primary'}`}><IoGrid /></button>
            <button onClick={() => setLayout('list')} className={`text-xl btn btn-circle btn-sm ${layout === 'list' && 'btn-primary'}`}><RxHamburgerMenu /></button>
          </div>
        </div>
        <div className='w-full h-1 bg-secondary mt-4'></div>
        <div className={` ${layout === 'grid' && 'grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10'} mt-4`}>
          {products.map(product => <ProductPreview key={product._id} product={product} layout={layout} />)}
        </div>
      </section>
    </>
  )
}