import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css";
import Book from "../components/Book";

function Home() {
  const books = useSelector((state) => state.books.items);

  return (
    <div className="home-container">
      <Sidebar />

      <div className="content">
        <h1>Welcome to Online Library System</h1>
        <h2>What is this website?</h2>
        <p>This website is an online library management application built using React. It allows users to browse books by category,
             search for books by title or author, and view detailed information about each book. Users can also contribute by 
             adding new books to the library. The goal of the website is to provide an organized, interactive, and user-friendly 
             platform for managing and exploring book collections.</p>
        <h2>Popular Books</h2>

        <div className="popular-books">
          {books.slice(0, 4).map((book) => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <Book bookDetails={book} />
            </Link>
          ))}
      </div>
      </div>
    </div>
  );
}

export default Home;
