import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const YourOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8000/myorders", {
          withCredentials: true,
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders", err);
      }
    };

    fetchOrders();
  }, []);

  const handleCancelOrder = async (orderId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );
    if (!confirmCancel) return;

    try {
      await axios.delete(`http://localhost:8000/cancelorder/${orderId}`, {
        withCredentials: true,
      });
      alert("Order cancelled successfully!");
      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (err) {
      console.error("Error cancelling order", err);
      alert("Failed to cancel order. Try again.");
    }
  };

  return (
    <div className="bg-red-100">
      <Navbar />
      <div className="min-h-screen max-w-[1200px] mx-auto mt-20 p-5">
        <h1 className="text-4xl font-bold text-center mb-10">📦 Your Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center text-2xl text-red-900 mt-10">
            You have no orders yet!
          </div>
        ) : (
          orders.map((order) => {
            
            const imageSrc = order.bookImage
            ? (order.bookImage.startsWith('data:image')
                ? order.bookImage
                : `data:image/jpeg;base64,${order.bookImage}`)
            : 'https://via.placeholder.com/350x200?text=No+Image';            
            return (
              <div
                key={order._id}
                className="bg-white shadow-lg p-5 mb-6 rounded-lg flex items-center"
              >
                <img
                  src={imageSrc}
                  alt="Book Cover"
                  className="h-[200px] w-auto mr-6"
                />
                <div className="flex-1 font-serif">
                  <h2 className="text-3xl font-bold mb-2">{order.bookName}</h2>
                  <p className="text-lg">Price: ₹{order.price}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Ordered on: {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleCancelOrder(order._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-full font-bold hover:bg-red-700"
                >
                  Cancel Order
                </button>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default YourOrders;
