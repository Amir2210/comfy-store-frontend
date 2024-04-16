import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Pages
import { HomeIndex } from './pages/HomeIndex'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import { Login } from './pages/Login'
import { CreateUser } from './pages/CreateUser'
import { ProductDetail } from './pages/ProductDetail'
import { ErrorPage } from './pages/ErrorPage'
//store
import { store } from './store/store'
import { Provider } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <Provider store={store}>
      <ToastContainer position='top-center' autoClose={500} />
      <Router>
        <Routes>
          <Route path='/' element={<HomeIndex />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createUser' element={<CreateUser />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
