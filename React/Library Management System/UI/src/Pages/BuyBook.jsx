import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const BuyBook = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/cartitem/${id}`, { withCredentials: true });
        setBookDetails(res.data);
      } catch (err) {
        console.error('Error fetching book details', err);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleConfirmBuy = async () => {
      
      try {
          // Place the order
          await axios.post(`http://localhost:8000/placeorder/${id}`, {}, { withCredentials: true });
          
          
          
          alert(`Order placed for: ${bookDetails.bookName}`);
    navigate('/yourOrder');
} catch (err) {
    console.error('Error placing order', err);
    alert('Failed to place order. Try again.');
  }
  };

  if (!bookDetails) {
    return <div className="text-center mt-10 text-xl">Loading book details...</div>;
  }

  return (
    <div className='bg-red-100'>
        <Navbar />|
        <div className='min-h-screen '>
    <div className="  max-w-[800px] mx-auto mt-20 p-10 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Buy Book</h1>
      <img src={bookDetails.bookId.image} alt="Book Cover" className="h-[300px] mx-auto" />
      <h2 className="text-2xl font-bold text-center mt-5">{bookDetails.bookId.bookName}</h2>
      <p className="mt-4 text-lg text-center">Price: ₹{bookDetails.bookId.price}</p>
      <div className="mt-10 flex justify-center">
        <button 
          onClick={handleConfirmBuy}
          className="bg-green-700 text-white font-bold py-3 px-6 rounded-full"
        >
          Confirm Purchase
        </button>
      </div>
    </div>
    </div>
        <Footer />
    </div>
  );
};

export default BuyBook;
