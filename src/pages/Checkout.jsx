import { useState } from 'react';
import { Navbar } from '../cmps/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearCart } from '../store/actions/user.actions';
import { toast } from 'react-toastify';

export function Checkout() {
  const location = useLocation()
  const { subTotal, shipping, tax, combinedCart } = location.state || {}
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  async function handleConfirmOrder() {
    if (name && address) {
      try {
        clearCart()
        toast.success('order place Successfully')
        navigate('/')
      } catch (error) {
        toast.error(`sorry can't you'r place Successfully`)
      }
    } else {
      toast.error(`please provide your name and address`)
    }
  }
  return (
    <>
      <Navbar />
      <section className='align-elemets'>
        <h1 className='text-4xl capitalize mt-8'>{combinedCart.length ? 'place your order' : 'Your Cart Is Empty'}</h1>
        <div className='w-full h-1 bg-secondary mt-4'></div>
        {combinedCart.length ?
          <div className='mt-4 sm:grid grid-cols-2 gap-20'>
            <div>
              <h2 className='text-2xl'>shipping information</h2>
              <form className='mt-8'>
                <label className="capitalize input input-bordered flex items-center gap-2">
                  first name :
                  <input required type="text" className="grow" value={name} onChange={(ev) => setName(ev.target.value)} />
                </label>
                <label className="capitalize input input-bordered flex items-center gap-2 mt-6">
                  address :
                  <input required type="text" className="grow" value={address} onChange={(ev) => setAddress(ev.target.value)} />
                </label>
                <button onClick={handleConfirmOrder} className='btn btn-success w-full mt-6 capitalize font-medium text-lg'>confirm order</button>
              </form>
            </div>
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
                <span className='capitalize'>tax</span>
                <span>${(parseFloat(tax).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
              </div>
              <div className='flex justify-between  pb-2 mt-4'>
                <span className='capitalize text-2xl'>total</span>
                <span className='text-2xl font-semibold'>${(parseFloat(subTotal + shipping + tax).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
              </div>
            </div>
          </div>
          : null
        }

      </section>
    </>
  )
}