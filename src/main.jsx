import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import ContactUs from './Components/ContactUs.jsx'
import MyCart from './Components/MyCart.jsx'
import Checkout from './Components/Checkout.jsx'
import { AuthProvider } from './Components/AuthContext.jsx'
import SingleProduct from './Components/SingleProduct.jsx'
import { CartProvider } from './Components/CartContext.jsx'
import Shop from './Components/Shop.jsx'
import AdminLogin from './Components/AdminLogin.jsx'
import Dashboard from './Components/AdminComponents/Dashboard.jsx'
import AllOrders from './Components/AdminComponents/AllOrders.jsx'
import ViewProfile from './Components/ViewProfile.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/my-cart' element={<MyCart />} />
        <Route path='/my-cart/checkout' element={<Checkout />} />
        <Route path='/single-product/:id' element={<SingleProduct />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
      <Route path='/admin' element={<AdminLogin />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/view-orders' element={<AllOrders />} />
      <Route path='/view-profile' element={<ViewProfile />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CartProvider>
  </StrictMode>,
)
