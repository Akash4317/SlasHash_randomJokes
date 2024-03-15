import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Favorite from '../pages/Favorite'
import Navbar from './Navbar'
import Home from '../pages/Home'

const AllRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/favorites" element={<Favorite />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
