import { MdSunny } from "react-icons/md"
import { FaMoon, FaShoppingCart } from "react-icons/fa"

import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { NavLinks } from './NavLinks'


import { loadAnonymousProductsCart, logout, } from '../store/actions/user.actions.js'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { anonymousCartService } from '../services/anonymousCartService.js'

const themes = {
  dracula: 'dracula',
  emerald: 'emerald'
}

function getThemeFromLocal() {
  return localStorage.getItem('theme') || themes.dracula
}
export function Navbar() {
  const [theme, setTheme] = useState(getThemeFromLocal())
  const user = useSelector((storeState) => storeState.userModule.loggedInUser)
  const anonymousCart = useSelector((storeState) => storeState.userModule.anonymousCart)
  const navigate = useNavigate()
  const totalCartProducts = user ? user.cart.reduce((acc, product) => acc + product.amount, 0) : anonymousCart.reduce((acc, product) => acc + product.amount, 0)
  function handleTheme() {
    const { dracula, emerald } = themes
    const newTheme = theme === dracula ? emerald : dracula
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    if (!user) loadAnonymousProductsCart()
  }, [theme])

  async function onLogout() {
    try {
      await logout()
      toast.success(`logged out successfully`)
      navigate('/')
      anonymousCartService.clearStorage()
    } catch (err) {
      console.log('err:', err)
      toast.error(`failed to logged out`)
    }
  }
  return (
    <nav className='bg-base-200 '>
      <div className='navbar align-elemets '>
        <div className='navbar-start'>
          <NavLink to={'/'} className='hidden lg:flex text-4xl text-slate-900 font-mono font-bold w-14 h-14 btn btn-primary  justify-center items-center rounded-lg duration-300'>C</NavLink>
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-link">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex '>
          <ul className='menu menu-horizontal '>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          <label className='swap swap-rotate'>
            <input type="checkbox" onChange={handleTheme} />
            <MdSunny className='swap-on h-6 w-6 ' />
            <FaMoon className='swap-off h-6 w-6 ' />
          </label>
          <NavLink className='btn btn-ghost btn-circle btn-md ml-4' to={`/cart`}>
            <div className='indicator'>
              <FaShoppingCart className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>{totalCartProducts}</span>
            </div>
          </NavLink>
        </div>
      </div>
      <div className=' text-center'>
        <ul className='menu menu-horizontal'>
          {user ? <li><span className='btn btn-secondary btn-outline capitalize ml-2'>hello {user.fullname}</span></li> : null}
          {!user ? <li><NavLink className='capitalize ml-2' to={`/login`}>log in</NavLink></li> :
            <li><button onClick={onLogout} className='btn btn-accent capitalize ml-2'>log out</button></li>}
          {!user ? <li><NavLink className='capitalize ml-2' to={`/createUser`}>create account</NavLink></li> : null}
        </ul>
      </div>
    </nav>
  )
}