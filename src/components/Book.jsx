import "./Book.css";

function Book(props) {
  const { title, author, description, coverImage } = props.bookDetails;

  return (
    <div className="book-card">
      <img
        src={coverImage}
        alt={title}
        className="book-cover"
      />

      <div>
        <h2 className="book-title">{title}</h2>

        <p className="book-author">{author}</p>

        <p className="book-description">{description}</p>
      </div>
    </div>
  );
}

export default Book;
