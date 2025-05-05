import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItems from './CartItems';
import { useNavigate } from 'react-router-dom';


const CartGrid = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigate= useNavigate()

  const fetchCartItems = async () => {
    try {
      const res = await axios.get('http://localhost:8000/items', { withCredentials: true });
      setCartItems(res.data);
    } catch (err) {
      console.error('Error fetching cart items', err);
    }
  };
  useEffect(() => {

    fetchCartItems();
  }, []);

  const handleRemove = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:8000/removefromcart/${cartItemId}`, { withCredentials: true });
      fetchCartItems(); // refresh list
    } catch (err) {
      console.error('Error removing item from cart', err);
    }
  };

  const handleBuy = (cartItemId) => {
    navigate(`/buy/${cartItemId}`);
    
  };

  return (
    <div>
      {cartItems.length=== 0 ? (
        <div className="text-center text-3xl font-bold mt-20 text-red-900 font-serif">
        🛒 Your cart is empty. Go grab a book 📚✨
      </div>
      ) : (
        cartItems.map(item => (
          <CartItems key={item._id} book={item.bookId} 
          cartItemId={item._id}
          onRemove={handleRemove} 
          onBuy={handleBuy} />
        ))
      )}
     
    </div>
  );
};

export default CartGrid;
