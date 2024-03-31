import { useParams } from 'react-router-dom'
import { Navbar } from '../cmps/Navbar'
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";


export function ProductDetail() {
  const { productId } = useParams()
  console.log(productId)
  return (
    <>
      <Navbar />
      <div className='align-elemets py-8'>
        <div className='flex items-center'>
          <Link to={`/`} className='mr-4 font-medium capitalize underline hover:text-secondary duration-150'>home</Link>
          <span> <FaArrowRightLong /></span>
          <Link to={`/products`} className='ml-4 font-medium capitalize underline hover:text-secondary duration-150'>products</Link>
        </div>
        <section>

        </section>
      </div>
    </>
  )
}