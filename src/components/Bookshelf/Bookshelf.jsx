import { useState } from "react"
import BookCard from "./BookCard/BookCard.jsx"

const Bookshelf = () => {
    const newBookInit = {
        title: '',
        author: ''
    }
    
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ])
    const [newBook, setNewBook] = useState(newBookInit)

    const handleInputChange = (event) => {
        setNewBook({
            ...newBook,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([
            ...books,
            newBook
        ])
        setNewBook(newBookInit)
    }

    return <>
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" id="title"
                            onChange={handleInputChange} value={newBook.title} />
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input type="text" name="author" id="author"
                            onChange={handleInputChange} value={newBook.author} />
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map( (book, index) => <BookCard key={index} {...book} /> )}
            </div>
        </div>
    </>
}

export default Bookshelf
