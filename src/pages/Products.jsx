import { toast } from 'react-toastify'

import { useSelector } from 'react-redux'
import { Navbar } from '../cmps/Navbar'
import { loadProducts, setFilterBy, setSortBy } from '../store/actions/products.action'
import { useEffect, useState } from 'react'

//ICONS
import { IoGrid } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"

//CMP
import { ProductPreview } from '../cmps/productPreview'
import { FilterProduct } from '../cmps/FilterProduct'
import { Pagination } from '../cmps/Pagination'

// LOADER
import { RotatingTriangles } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'



export function Products() {
  const navigate = useNavigate()
  const user = useSelector((storeState) => storeState.userModule.loggedInUser)
  const products = useSelector((storeState) => storeState.productsModule.products)
  const totalItems = useSelector((storeState) => storeState.productsModule.totalItems)
  const isLoading = useSelector((storeState) => storeState.productsModule.isLoading)
  const [layout, setLayout] = useState('grid')
  const filterBy = useSelector((storeState) => storeState.productsModule.filterBy)
  const sortBy = useSelector((storeState) => storeState.productsModule.sortBy)




  useEffect(() => {
    loadProducts()
      .catch((err) => {
        toast.error(`failed to load products`)
        navigate('/')
      })
  }, [filterBy, sortBy])

  function onSetFilter(filterBy) {
    setFilterBy(filterBy)
  }

  function onSetSort(sortBy) {
    setSortBy(sortBy)
  }



  return (
    <>
      <Navbar user={user} />
      <FilterProduct filterBy={filterBy} onSetFilter={onSetFilter} sortBy={sortBy} onSetSort={onSetSort} />
      <section className='align-elemets mt-6'>
        <div className='flex justify-between'>
          <h2 className='text-xl font-medium'>{!isLoading && totalItems} {totalItems <= 1 ? 'product' : 'products'}</h2>
          <div className='hidden sm:block'>
            <button onClick={() => setLayout('grid')} className={`text-xl btn btn-circle btn-sm mr-2 ${layout === 'grid' && 'btn-primary'}`}><IoGrid /></button>
            <button onClick={() => setLayout('list')} className={`text-xl btn btn-circle btn-sm ${layout === 'list' && 'btn-primary'}`}><RxHamburgerMenu /></button>
          </div>
        </div>
        <div className='w-full h-1 bg-secondary mt-4'></div>
        <div className={` ${layout === 'grid' && 'grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10'} mt-4`}>
          {!isLoading && products.map(product => <ProductPreview key={product._id} product={product} layout={layout} />)}
          {isLoading &&
            <RotatingTriangles
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
      <Pagination filterBy={filterBy} onSetFilter={onSetFilter} totalItems={totalItems} />
    </>
  )
}