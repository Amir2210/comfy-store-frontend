import { Link } from "react-router-dom"
export function Navbar() {
  return (
    <nav className='bg-slate-900'>
      <div className='text-white flex justify-between'>
        <div>
          <Link>C</Link>
        </div>
        <div>
          <Link to={`/`}>home</Link>
          <Link to={`/about`}>about</Link>
          <Link to={`/products`}>products</Link>
          <Link to={`/cart`}>cart</Link>
        </div>
        <div>
          <button>darkMode</button>
          <Link to={`/cart`}>cart</Link>
        </div>
      </div>
      <div className='text-white text-center'>
        <Link to={`/login`}>log in</Link>
        <Link to={`/createUser`}>create account</Link>
      </div>
    </nav>
  )
}