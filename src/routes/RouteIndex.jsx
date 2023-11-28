

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
// import LazyFn from './lazy/Lazy'

export default function RouteIndex() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="about" element={<div>About</div>} />
                        <Route path="contact" element={<div>Contact</div>} />
                    </Route>
                    <Route path='admin' element={<>ADMIN PAGE</>}/>
                    {/* <Route path="/authen" element={LazyFn(() => import("@pages/authen/Authen.jsx"))()}></Route> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}
