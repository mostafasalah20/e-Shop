import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Layout from './compnants/Layout/Layout'
import Home from './compnants/Home/Home'
import Product from './compnants/Product/Product'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DetailsProduct from './compnants/DetailsProduct/DetailsProduct'
import { CartProvider } from './Context/CartContext'
import Cart from './compnants/Cart/Cart'
import { Toaster } from 'react-hot-toast'
import About from './compnants/About/About'
import Contact from './compnants/Contact/Contact'


let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'product', element: <Product /> },
      { path: 'detailsProduct/:id', element: <DetailsProduct /> },
      { path: 'cart', element: <Cart/> },
      { path: 'about', element: <About/> },
      { path: 'contact', element: <Contact/> },

    ]
  }
])

let Query = new QueryClient()
function App() {

  return <CartProvider>
    <QueryClientProvider client={Query}>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster />
    </QueryClientProvider>
  </CartProvider>



}

export default App
