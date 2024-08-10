import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import AboutTheCompany from './pages/AboutTheCompany'
import Contact from './pages/Contact'
import Delivery from './pages/Delivery'
import Payment from './pages/Payment'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/AboutTheCompany' element={<AboutTheCompany/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Delivery' element={<Delivery/>}/>
        <Route path='/Payment' element={<Payment/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App