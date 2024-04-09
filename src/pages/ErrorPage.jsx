import { Link } from 'react-router-dom';
import error from '../assets/error.svg'
export function ErrorPage() {
  return (
    <section className='bg-primary text-center py-14 px-14 h-screen'>
      <h1 className='text-3xl font-bold text-white'>Ohh!</h1>
      <p className='text-3xl font-bold text-white'>We can't seem to find the page you're looking for 😞</p>
      <Link className='btn my-3' to={'/'}>Back Home</Link>
      <img src={error} alt="error image" className='block mx-auto my-10' />
    </section>
  )
}