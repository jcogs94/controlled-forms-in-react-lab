const BookCard = ({ title, author }) => {
    return <>
        <div className="bookCard">
            <h4>{title}</h4>
            <p>{author}</p>
        </div>
    </>
}

export default BookCard
