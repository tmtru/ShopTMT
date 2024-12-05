import React from 'react'
import NavScroll from '../components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'

const ShopApplicationWrapper = () => {
    return (
        <div>
            <NavScroll />
            <Outlet />
        </div>
    )
}

export default ShopApplicationWrapper