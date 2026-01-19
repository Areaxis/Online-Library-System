import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books/all">Browse Books</Link>
      <Link to="/add">Add Book</Link>
    </nav>
  );
}

export default Header;