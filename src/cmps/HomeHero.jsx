import { HeroCarousel } from './HeroCarousel';
import { Link } from 'react-router-dom';

import "react-multi-carousel/lib/styles.css";
export function HomeHero() {
  return (
    <section className='align-elemets flex py-10 lg:grid lg:grid-cols-2 lg:gap-24 lg:py-20 '>
      <div>
        <h1 className='font-bold text-4xl mb-6 lg:text-6xl '>We are changing the way people shop</h1>
        <p className='mb-6 text-lg tracking-wider'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
        <Link to={`/products`} className='btn btn-primary capitalize'>our products</Link>
      </div>
      <div className='hidden lg:max-h-96 lg:flex rounded-lg'>
        <HeroCarousel />
      </div>
    </section>
  )
}