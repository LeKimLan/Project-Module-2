

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shelvesActions } from '../slices/shelves/shelves.slice'

export default function BookShelves() {
    const dispatch = useDispatch()
    const shelvesStore = useSelector(store => store.shelvesStore)

    return (
        <>
            <h1>Book shelves</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(shelvesActions.addBook({
                            id: Date.now() * Math.random(),
                            title: e.target.title.value,
                            author: e.target.author.value,
                    }))
                }
            }>
                <div>
                    Title: <input type="text" name='title' />
                </div>
                <div>
                    Author: <input type="text" name='author' />
                </div>
                <button type='submit'>Add</button>
            </form>
            <div>
                {
                    shelvesStore.books?.map((book, index) =>
                        <div key={Date.now() * Math.random()}>
                            <div>{index + 1}</div>
                            <div>title: {book.title}</div>
                            <div>author: {book.author}</div>
                            <button type='button' onClick={() => {
                                dispatch(shelvesActions.removeBook(book.id))
                            }}>Remove</button>
                        </div>
                    )
                }
            </div>
        </>
    )
}
