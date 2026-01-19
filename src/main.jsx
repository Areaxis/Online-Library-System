import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import appStore from "./utils/appStore";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        index: true, element: <Home />
      },
      {
        element: <Layout />,   // sidebar
        children: [
          { path: "books/:category", element: <BrowseBooks /> },
          { path: "add", element: <AddBook /> },
          { path: "book/:id", element: <BookDetails /> }
        ]
      }
    ],
    errorElement: <NotFound />
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
