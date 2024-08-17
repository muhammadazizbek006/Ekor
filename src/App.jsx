import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import AboutTheCompany from './pages/AboutTheCompany'
import Contact from './pages/Contact'
import Delivery from './pages/Delivery'
import Payment from './pages/Payment'
import Production from './pages/Production'
import Products from './pages/Products'
import Sinov from './pages/Sinov'
import Catalog from './pages/Catalog'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/AboutTheCompany' element={<AboutTheCompany/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Delivery' element={<Delivery/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/Production' element={<Production/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/sinov' element={<Sinov/>}/>
        <Route path='/Catalog' element={<Catalog/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App