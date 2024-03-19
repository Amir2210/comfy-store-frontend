import { NavLink } from "react-router-dom"
const links = [
  {
    id: 1,
    url: '/',
    txt: 'home'
  },
  {
    id: 2,
    url: '/about',
    txt: 'about'
  },
  {
    id: 3,
    url: '/products',
    txt: 'products'
  },
  {
    id: 4,
    url: '/cart',
    txt: 'cart'
  },
]


export function NavLinks() {
  return (
    <>
      {links.map(link => {
        const { url, txt, id } = link
        return (
          <li key={id}>
            <NavLink className='capitalize ml-2' to={url}>{txt}</NavLink>
          </li>
        )
      })}
    </>
  )
}