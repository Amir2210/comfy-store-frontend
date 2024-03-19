import { Link } from "react-router-dom"
export function Navbar() {
  return (
    <nav className='bg-slate-900'>
      <div className='text-white flex justify-between'>
        <div>
          <Link>C</Link>
        </div>
        <div>
          <Link>home</Link>
          <Link>about</Link>
          <Link>products</Link>
          <Link>cart</Link>
        </div>
        <div>
          <button>darkMode</button>
          <Link>cart</Link>
        </div>
      </div>
      <div className='text-white text-center'>
        <Link>log in</Link>
        <Link>create account</Link>
      </div>
    </nav>
  )
}