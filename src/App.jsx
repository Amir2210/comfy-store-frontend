import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomeIndex } from './pages/HomeIndex'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import { Login } from './pages/Login'
import { CreateUser } from './pages/CreateUser'
//store
import { store } from './store/store'
import { Provider } from 'react-redux'
function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomeIndex />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createUser' element={<CreateUser />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
