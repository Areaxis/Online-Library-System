import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookDetails.css";

function BookDetails() {
  const { id } = useParams();

  const book = useSelector((state) =>
    state.books.items.find((b) => b.id == id)
  );

  if (!book) {
    return (
      <div>
        <h2>Loading book details...</h2>
        <p>Book not found or data not loaded yet.</p>
        <Link to="/books/all">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{book.id}. {book.title}</h1>
      <div className="book-details">
        {book.coverImage && (
          <img src={book.coverImage} width="200px" />
        )}
        <div className="bookd-text">
            <h2>{book.title}</h2>
            <p>Author: <span className="bookd-author">{book.author}</span></p>
            <p className="bookd-description">{book.longDescription}</p>

            <p className="bookd-rating">Rating: {book.rating}</p>
        </div>
    </div>

      <Link to="/books/all" className="browserButton">Back to Browse</Link>
    </div>
  );
}

export default BookDetails;