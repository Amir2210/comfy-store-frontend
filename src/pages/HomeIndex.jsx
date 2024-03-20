import { Navbar } from '../cmps/Navbar'
import { HomeHero } from '../cmps/HomeHero'
import { FeaturedProducts } from '../cmps/FeaturedProducts'

export function HomeIndex() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <FeaturedProducts />
    </main>
  )
}