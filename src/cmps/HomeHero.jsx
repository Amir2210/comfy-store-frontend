export function HomeHero() {
  return (
    <section className='align-elemets grid grid-cols-2 gap-24 py-20'>
      <div>
        <h1 className='text-6xl font-bold mb-6'>We are changing the way people shop</h1>
        <p className='mb-6 text-lg tracking-wider'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
        <button className='btn btn-primary capitalize'>our products</button>
      </div>
      <div>
        <img className='w-36' src="src/assets/imgs/hero1.webp" alt="" />
      </div>
    </section>
  )
}