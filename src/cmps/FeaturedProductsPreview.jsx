export function FeaturedProductsPreview({ product }) {
  return (
    <article className='p-7 shadow-2xl rounded-lg text-center cursor-pointer hover:scale-105 duration-300'>
      <img className='w-full h-56 object-cover rounded-lg' src={product.attributes.image} alt="" />
      <h1 className='mt-4 capitalize text-2xl tracking-wider font-medium'>{product.attributes.title}</h1>
      <p className='mt-2 tracking-wider text-secondary'>$ {parseFloat(product.attributes.price) / 100}</p>
    </article>
  )
}