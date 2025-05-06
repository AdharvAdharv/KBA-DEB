import React from "react";
import axios from "axios"

const BookCard = ({ book }) => {

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:8000/addtocart', 
        { bookId: book._id }, 
        { withCredentials: true }
      );

      if (response.status === 201) {
        alert('Book added to cart successfully!');
      }
    } catch (error) {
      
        if (error.response?.status === 409) {
          alert('This book is already in your cart.');
        } else {
          console.error('Error adding to cart:', error);
          alert('Failed to add book to cart');
        }
    }
  };
  const imageSrc = book.bookImage
  ? (book.bookImage.startsWith('data:image')
 ? book.bookImage
      : `data:image/jpeg;base64,${book.bookImage}`)
  : 'https://via.placeholder.com/350x200?text=No+Image';


  return (
    <div className="bg-white h-auto w-[350px] pt-6 font-serif p-4 rounded-lg ring ring-gray-300 shadow-md">
      {/* Image Section */}
      <img
        className="mx-auto h-[400px] w-full object-cover rounded"
        src={imageSrc}
        alt={book.bookName}
      />

      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-red-900 mt-4">
        {book.bookName}
      </h2>

      {/* Price and Button */}
      <div className="flex mt-4 justify-between items-center">
        <p className="font-black text-xl text-red-900 ml-2">₹{book.price}</p>
        <button 
        onClick={handleAddToCart}
        className="bg-red-900 w-[100px] h-[40px] rounded-xl text-white font-semibold hover:bg-red-800 transition">
          Add to Cart
        </button>
      </div>

      {/* Description */}
      <p className="text-lg font-semibold mt-4 mb-2 text-gray-700">Description</p>
      <p className="text-base text-gray-600 break-words">{book.description}</p>
    </div>
  );
};

export default BookCard;
