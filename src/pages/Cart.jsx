import { useSelector } from 'react-redux'
import { Navbar } from '../cmps/Navbar'
import { changeAnonymousCartProductAmount, changeProductAmount, loadAnonymousProductsCart, removeProductFromAnonymousCart, removeProductFromCart } from '../store/actions/user.actions'
import { toast } from 'react-toastify'
import { Link } from "react-router-dom"
import { useEffect } from 'react'

export function Cart() {
  const userCart = useSelector((storeState) => storeState.userModule.loggedInUser?.cart)
  const anonymousCart = useSelector((storeState) => storeState.userModule.anonymousCart)
  const combinedCart = userCart ? [...userCart] : [...anonymousCart]
  const subTotal = combinedCart.reduce((acc, product) => acc + (product.price * product.amount), 0)
  const shipping = combinedCart.reduce((acc, product) => {
    if (!product.shipping) return acc + 22
    return acc
  }, 0)
  const tax = combinedCart.reduce((acc, product) => acc + product.amount, 0) * 10

  useEffect(() => {
    if (!userCart) loadAnonymousProductsCart()
  }, [])

  async function onChangeAmount(productId, amount) {
    if (userCart) {
      try {
        changeProductAmount(productId, amount)
        toast.success(`amount has been successfully changed`)
      } catch (error) {
        toast.error(`can't change the amount pls try again later`)
      }
    } else {
      changeAnonymousCartProductAmount(productId, amount)
    }
  }

  async function onRemoveFromCart(productId) {
    if (userCart) {
      try {
        removeProductFromCart(productId)
        toast.success(`product has been successfully removed`)
      } catch (error) {
        toast.error(`can't remove the product pls try again later`)
      }
    } else {
      removeProductFromAnonymousCart(productId)
    }
  }


  return (
    <>
      <Navbar />
      <section className='align-elemets'>
        <h1 className='text-4xl capitalize mt-8'>{combinedCart.length ? 'shopping cart' : 'Your Cart Is Empty'}</h1>
        <div className='w-full h-1 bg-secondary mt-4'></div>
        <div className='sm:grid sm:grid-cols-4 sm:gap-5 flex flex-col'>
          <div className='sm:col-span-3'>
            {!combinedCart.length ? null : combinedCart.map((product, index) => <article className=' flex flex-col items-start md:grid md:grid-cols-5 py-7 sm:px-7 sm:shadow-2xl sm:rounded-lg border-b-4  text-center cursor-pointer mt-6' key={index}>
              <img className=' size-56 sm:size-32 object-cover rounded-lg  sm:m-0' src={product.image} alt={product.title} />
              <div className=' col-span-2 flex flex-col items-start '>
                <h1 className='mt-4  capitalize text-2xl tracking-wider font-medium'>{product.title}</h1>
                <h2 className='mt-4 capitalize text-xl tracking-wider font-medium'>company: {product.company}</h2>
                <div className='flex items-center justify-center mt-4'>
                  <span className='mr-3 text-xl font-medium'>color:</span>
                  <span className='badge w-6 h-6' style={{ backgroundColor: `${product.color}` }}></span>
                </div>
              </div>
              <div className='flex flex-col items-start '>
                <h1 className='mt-4 capitalize text-2xl tracking-wider font-medium'>amount</h1>
                <select className="select select-secondary mt-4" defaultChecked={product.amount} value={product.amount} onChange={(ev) => onChangeAmount(product._id, +ev.target.value)}>
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
                <button onClick={() => onRemoveFromCart(product._id)} className='btn btn-error capitalize text-base mt-4'>remove</button>
              </div>
              <div className='flex flex-col items-start '>
                <h1 className='mt-4 capitalize text-2xl tracking-wider font-medium'>price</h1>
                <h2 className='mt-4 font-medium tracking-wider text-lg'>$ {(parseFloat(product.price * product.amount).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
              </div>
            </article>)}
          </div>
          {combinedCart.length ?
            <div>
              <div className='mt-6 card-body bg-base-200 max-h-64 sm:rounded-lg text-center'>
                <div className='flex justify-between border-b-2 border-base-300 pb-3 text-sm'>
                  <span className='capitalize '>subtotal</span>
                  <span>${(parseFloat(subTotal).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
                <div className='flex justify-between border-b-2 border-base-300 pb-2 text-sm'>
                  <span className='capitalize text-sm'>shipping</span>
                  <span>${(parseFloat(shipping).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
                <div className='flex justify-between border-b-2 border-base-300 pb-2 text-sm'>
                  <span className='capitalize '>tax</span>
                  <span>${(parseFloat(tax).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
                <div className='flex justify-between  pb-2 mt-4'>
                  <span className='capitalize text-2xl'>total</span>
                  <span className='text-2xl font-semibold'>${(parseFloat(subTotal + shipping + tax).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
              </div>
              <div className='col-end-5 my-4 sm:mb-4'>
                {!userCart && <Link to={`/login`} className='btn btn-secondary capitalize'>please login</Link>}
                {userCart && <Link to={`/checkout`} state={{ subTotal, shipping, tax, combinedCart }} className='btn btn-secondary capitalize'>proceed to check out</Link>}
              </div>
            </div>
            : null
          }
        </div>
      </section>
    </>
  )
}