import { Navbar } from '../cmps/Navbar'
import { HomeHero } from '../cmps/HomeHero'
import { FeaturedProducts } from '../cmps/FeaturedProducts'
import { useSelector } from 'react-redux'

export function HomeIndex() {
  const user = useSelector((storeState) => storeState.userModule.loggedInUser)
  return (
    <main>
      <Navbar user={user} />
      <HomeHero />
      <FeaturedProducts />
    </main>
  )
}