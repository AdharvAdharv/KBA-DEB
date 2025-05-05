import { Router } from 'express';
import { authenticate } from "../Middleware/auth.js";
import { Order, Cart } from '../Model/Schema.js';

const orderRouter = Router();

// Place order (move item from cart to orders)
orderRouter.post('/placeorder/:id', authenticate, async (req, res) => {
  try {
    const cartItemId = req.params.id;

    const cartItem = await Cart.findById(cartItemId).populate('bookId');

    if (!cartItem) {
      return res.status(404).send('Cart item not found');
    }

    const newOrder = new Order({
      userId: req.user,
      bookId: cartItem.bookId._id,
      bookName: cartItem.bookId.bookName,
      price: cartItem.bookId.price
    });

    await newOrder.save();
    await Cart.findByIdAndDelete(cartItemId);

    res.status(201).send('Order placed successfully');
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Fetch orders
orderRouter.get('/myorders', authenticate, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user }).populate('bookId');
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Cancel Order
orderRouter.delete('/cancelorder/:id', authenticate, async (req, res) => {
    try {
      const orderId = req.params.id;
  
      const deletedOrder = await Order.findByIdAndDelete(orderId);
  
      if (!deletedOrder) {
        return res.status(404).send('Order not found');
      }
  
      res.status(200).send('Order cancelled successfully');
    } catch (error) {
      console.error('Error cancelling order:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

export default orderRouter;
