

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>Home</div>}>
                        <Route path="about" element={<div>About</div>} />
                        <Route path="contact" element={<div>Contact</div>} />
                    </Route>
                    <Route path='admin' element={<>ADMIN PAGE</>}/>
                    <Route path="/authen" element={LazyFn(() => import("@pages/authen/Authen.jsx"))()}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
