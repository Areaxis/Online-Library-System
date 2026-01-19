import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../utils/bookSlice";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./AddBook.css";

function AddBook() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.items);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setlongDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [rating, setRating] = useState("");

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (
      title === "" ||
      author === "" ||
      category === "" ||
      description === "" ||
      longDescription === "" ||
      rating === ""
    ) {
      alert("Please fill all required fields");
      return;
    } else if (rating > 5 || rating < 0) {
      alert("Please add a valid input for rating (0 to 5 incl. decimals)");
      return;
    }

    const lastId =
      books.length > 0 ? Math.max(...books.map((b) => b.id)) : 0;

    const nextId = lastId + 1;

    const newBook = {
      id: nextId,
      title: title,
      author: author,
      category: category,
      description: description,
      longDescription: longDescription,
      coverImage: coverImage,
      rating: rating,
    };

    dispatch(addBook(newBook));

    setSubmitted(true);
  }

  if (submitted) {
    return <Navigate to="/books/all" />;
  }


  return (
    <div className="addbook-container">

      <div className="form-section">
        <h2>Add New Book</h2>

        <form onSubmit={handleSubmit}>
          Inputs with * are required

          <input
            placeholder="Title*"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Author*"
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
          />

          <input
            placeholder="Category*"
            type="text"
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            placeholder="Description*"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />

          <textarea
            placeholder="Long Description*"
            onChange={(e) => setlongDescription(e.target.value)}
          />

          <input
            placeholder="Rating*"
            type="number"
            step="any"
            onChange={(e) => setRating(e.target.value)}
          />

          <input
            placeholder="Image URL"
            onChange={(e) => setCoverImage(e.target.value)}
          />

          <button className="browserButton" type="submit">
            Add Book
          </button>
        </form>
      </div>
      <div>
        <div className="side-section">
          <h2>Are you an aspiring writer?</h2>
          <p>
            This platform is not just for readers but also for creators!
            You can add your own books to the library and share your stories
            with others.
          </p>
          <p>
            Use the form on the left to upload your work and become part of
            our growing online collection.
          </p>
          <p>
            Start building your literary presence today!
          </p>
        </div>
        <div className="side-section">
          <h2>Any questions regarding the library?</h2>
          <p>
            Look me up on my socials:
          </p>
          <a href="https://www.facebook.com/addi.peseyie" target="_blank" className="social-icon"><img src="/facebook.png"/></a>
          <a href="https://github.com/Areaxis" target="_blank" className="social-icon"><img src="/github.png"/></a>
          <a href="https://www.linkedin.com/in/khriesezo-peseyie" target="_blank" className="social-icon"><img src="/linkedin.png"/></a>
          <a href="https://www.instagram.com/addipese" target="_blank" className="social-icon"><img src="/instagram.png"/></a>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
