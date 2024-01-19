import React from 'react'
import './Layout.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='Layout'>
        <div className='LayoutContent'>
            <Navbar />
            <div className='MainScreen'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Layout