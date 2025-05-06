import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import {  useNavigate } from "react-router-dom";


const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bookImage,setBookImage] =useState("");
  
  const navigate= useNavigate()
  
  const handleAddBook = async () => {
    if (!bookName || !authorName || !genre || !description || !price || !bookImage) {
      alert("Please fill in all fields before submitting!");
      return;
    }
    try {
      const formData = new FormData();
      formData.append('BookName', bookName);
      formData.append('AuthorName', authorName);
      formData.append('Genre', genre);
      formData.append('Description', description);
      formData.append('Price', price);
      formData.append('bookImage', bookImage);  
  
      const response = await axios.post(
        "http://localhost:8000/addbook",
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
  
      alert(response.data);
  
      setBookName("");
      setAuthorName("");
      setGenre("");
      setDescription("");
      setPrice("");
      setBookImage(null);
  
      navigate('/homepage');
  
    } catch (error) {
      console.error(error);
      alert(error.response?.data || "Something went wrong");
    }
  };
  return (
    <>
      <div className="bg-red-100">
        <Navbar />

        <div className="flex justify-center">
          <div className="bg-white w-[590px] h-[640px] mt-9 font-sans pt-6 pl-12 rounded ">
            <p className="text-center text-3xl text-red-900 font-serif">
              Add Book
            </p>
            <label>Book Name</label>
            <input
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 ring ring-black"
              type="text"
            />

            <label>Author Name</label>
            <input
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 ring ring-black"
              type="text"
            />

            <label>Genre</label>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 font-normal ring ring-black"
            >
               <option value="">Select Option</option>
              <option value="Drama">Drama</option>
              <option value="Fiction">Fiction</option>
              <option value="Action">Action</option>
              <option value="Romance">Romance</option>
            </select>

            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 mb-5 ring ring-black rounded"
              cols="49"
              rows="3"
            ></textarea>

            <br />
            <label>Price</label>
            <br />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 ring ring-black"
              type="number"
            />

              <input
              type="file"
              accept="image/*"
              onChange={(e) => setBookImage(e.target.files[0])}
              className="w-[220px] ml-[150px] auto py-2 px-4 rounded-lg text-white bg-blue-600 cursor-pointer hover:bg-blue-700 transition"
           required/>

            <button   
              onClick={handleAddBook}
              className="bg-red-900 w-[500px] h-[35px] text-white rounded mt-8 mb-7"
            >
              Add Book
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AddBook;
