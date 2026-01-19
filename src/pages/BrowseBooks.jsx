import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./BrowseBooks.css";

import Search from "../components/Search";
import Book from "../components/Book";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.items);

  const [query, setQuery] = useState("");

  const filteredBooks = books.filter(
    (b) =>
      (category === "all" || b.category === category) &&
      (b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.author.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <h2>{category === "all" ? "All Books" : category}</h2>

      <Search setQuery={setQuery} />

      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="book-list">
          {filteredBooks.map((book) => (
            <Link to={`/book/${book.id}`}>
              <Book key={book.id} bookDetails={book} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default BrowseBooks;
