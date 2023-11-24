

import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './main.scss'
import UpAvatar from './components/UpAvatar'
import BookShelves from './components/BookShelves'

export default function App() {
	
	return (
		<>
			<header>
				<h3>Header</h3>
				<div>
					<Link to="/">Home</Link>
					<Link to="/components/BookShelves" >Book Shelves</Link>
					<Link to="/components/UpAvatar">Up Avatar</Link>
				</div>
			</header>
				<div>
					<Routes>
						<Route path='/' element={<>Home Page</>} />
						<Route path='/components/BookShelves' element={<BookShelves />} />
						<Route path='/components/UpAvatar' element={<UpAvatar />} />
					</Routes>
				</div>
			<footer>Footer</footer>
		</>
	)
}
