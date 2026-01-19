import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="browse-container">
      <Sidebar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
