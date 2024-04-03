import { Link } from 'react-router-dom';

export function ProductPreview({ product, layout }) {
  if (layout === 'grid')
    return (
      <Link to={`/product/${product._id}`} className='p-7 shadow-2xl rounded-lg text-center cursor-pointer hover:scale-105 duration-300'>
        <img className='w-full h-56 object-cover rounded-lg' src={product.image} alt="" />
        <h1 className='mt-4 capitalize text-2xl tracking-wider font-medium'>{product.title}</h1>
        <p className='mt-2 tracking-wider text-secondary'>$ {parseFloat(product.price) / 100}</p>
      </Link>
    )
  return (
    <Link to={`/product/${product._id}`} className='flex flex-col sm:flex-row p-7 shadow-2xl rounded-lg text-center cursor-pointer hover:scale-105 duration-300 mt-6'>
      <img className='w-40 h-40 object-cover rounded-lg m-auto sm:m-0' src={product.image} alt="" />
      <div className='sm:ml-6 sm:flex sm:flex-col sm:items-start'>
        <h1 className='mt-4 sm:mt-0 capitalize text-2xl tracking-wider font-medium'>{product.title}</h1>
        <h2 className='mt-4  capitalize text-xl tracking-wider font-medium'>{product.company}</h2>
      </div>
      <p className='ml-auto tracking-wider text-secondary'>$ {parseFloat(product.price) / 100}</p>
    </Link>
  )
}