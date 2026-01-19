import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Sidebar.css"

function Sidebar() {
  const books = useSelector((state) => state.books.items);

  // Get unique categories
  const categories = [...new Set(books.map((b) => b.category))];

  // Sort alphabetically
  const sortedCategories = categories.sort();

  // Create counts
  const categoryCounts = sortedCategories.map((cat) => ({
    name: cat,
    count: books.filter((b) => b.category === cat).length,
  }));

  const totalCount = books.length;

  return (
    <div className="sidebar">
      <h3>Categories</h3>

      <ul>
        <li>
          <Link to="/books/all">All Books ({totalCount})</Link>
        </li>

        {categoryCounts.map((cat) => (
          <li key={cat.name}>
            <Link to={`/books/${cat.name}`}>
              {cat.name} ({cat.count})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
