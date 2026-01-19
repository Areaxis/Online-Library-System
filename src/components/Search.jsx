import "./Search.css";

function Search(props) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search..."
      onChange={(e) => props.setQuery(e.target.value)}
    />
  );
}

export default Search;