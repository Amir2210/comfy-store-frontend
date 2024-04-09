import { useNavigate, useParams } from 'react-router-dom'
import { Navbar } from '../cmps/Navbar'
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import { useEffect, useState } from 'react'
import { featuredProductsService } from '../services/featuredProducts.service'
import { productsService } from '../services/products.service'
import { useSelector } from 'react-redux'

export function ProductDetail() {
  const user = useSelector((storeState) => storeState.userModule.loggedInUser)
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [color, setColor] = useState(null)
  const { productId } = useParams()

  useEffect(() => {
    loadProduct()
  }, [])


  async function loadProduct() {
    try {
      const product = await featuredProductsService.getById(productId) || await productsService.getById(productId)
      setProduct(product)
      setColor(product.colors[0])
    } catch (error) {
      console.log(error)
      navigate('/')
    }
  }
  if (!product) return <div>Loading</div>
  return (
    <>
      <Navbar user={user} />
      <div className='align-elemets py-8'>
        <div className='flex items-center'>
          <Link to={`/`} className='mr-4 font-medium capitalize underline hover:text-secondary duration-150'>home</Link>
          <span> <FaArrowRightLong /></span>
          <Link to={`/products`} className='ml-4 font-medium capitalize underline hover:text-secondary duration-150'>products</Link>
        </div>
        <section className='grid gap-y-10 lg:grid-cols-2 lg:gap-x-10 mt-10'>
          <img className='w-80 h-80 object-cover rounded-lg lg:w-full' src={product.image} alt="" />
          <div>
            <h1 className='capitalize text-3xl font-medium'>{product.title}</h1>
            <h2 className='capitalize text-xl mt-2'>company: {product.company}</h2>
            <p className='my-8'>{product.description}</p>
            <h3 className='capitalize text-xl my-2'>colors</h3>
            <div className='flex'>
              {product.colors.map(productColor => <button onClick={() => setColor(productColor)} type='button' className={`badge w-6 h-6 mr-2 ${productColor === color && 'border-2 border-secondary'}`} key={productColor} style={{ backgroundColor: `${productColor}` }}></button>)}
            </div>
            <h3 className='capitalize text-xl my-4'>amount</h3>
            <select className="select select-secondary w-full max-w-xs" defaultChecked={1}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <div className='my-6'>
              <button className='btn btn-secondary capitalize'>add to bag</button>
            </div>
          </div>
        </section >
      </div >
    </>
  )
}