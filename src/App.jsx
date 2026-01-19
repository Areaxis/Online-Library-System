import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBooks } from "./utils/bookSlice";
import getMockBooks from "./utils/mockBooks";
import { useEffect } from "react";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBooks(getMockBooks()));
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;