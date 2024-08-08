import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import RequestForCooperation from '../components/home/RequestForCooperation'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen '>
        <Header/>
        <main className='grow'>
            <Outlet/>
        </main>
        <RequestForCooperation/>
        <Footer/>
    </div>
  )
}

export default MainLayout