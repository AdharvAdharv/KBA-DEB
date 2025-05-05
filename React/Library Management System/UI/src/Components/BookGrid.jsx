import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./Bookcard";

const BookGrid = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getallbook", {
        
      });
      setBooks(response.data);
    } catch (error) {
      console.error(error);
      alert(error.response?.data || "Could not fetch books");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="relative top-[100px] mb-[150px] min-h-screen  grid grid-cols-3 ml-[80px] gap-8">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;
