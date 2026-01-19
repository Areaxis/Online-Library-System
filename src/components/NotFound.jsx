import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Invalid Route: {location.pathname}</p>
      <Link to="/"><button>Go Home</button></Link>
    </div>
  );
}

export default NotFound;