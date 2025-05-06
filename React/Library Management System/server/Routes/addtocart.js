import {Router} from 'express';
import { authenticate } from "../Middleware/auth.js";
import { Cart } from '../Model/Schema.js';
import { Books } from '../Model/Schema.js';
const cartRouter= Router();

cartRouter.post('/addtocart', authenticate, async (req, res) => {
  try {
    const { bookId } = req.body;
    const userId = req.user;

    const book = await Books.findById(bookId);
    if (!book) {
      return res.status(404).send('Book not found');
    }

      // 🔍Check if this book is already in the user's cart
      const existingCartItem = await Cart.findOne({ userId, bookId });
      if (existingCartItem) {
        return res.status(409).send('Book already in cart');
      }

    const newCartItem = new Cart({
      userId: req.user,
      bookId: book._id,
      bookName: book.bookName,
      price: book.price,
      quantity: 1,
    });

    await newCartItem.save();
    res.status(201).send('Book added to cart');
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).send('Internal Server Error');
  }
});


cartRouter.get('/items', authenticate, async (req, res) => {
    try {
        console.log("get Cart");
        
      const userId = req.user;
      
      const cartItems = await Cart.find({ userId }).populate('bookId');
      console.log(cartItems);
  
      res.status(200).json(cartItems);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  

  cartRouter.delete('/removefromcart/:id', authenticate, async (req, res) => {
    try {
      const cartItemId = req.params.id;
  
      const deletedItem = await Cart.findByIdAndDelete(cartItemId);
  
      if (!deletedItem) {
        return res.status(404).send('Cart item not found');
      }
  
      res.status(200).send('Item removed from cart');
    } catch (error) {
      console.error('Error removing from cart:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  cartRouter.get('/cartitem/:id', authenticate, async (req, res) => {
    try {
      const cartItemId = req.params.id;
      const cartItem = await Cart.findById(cartItemId).populate('bookId');
  
      if (!cartItem) {
        return res.status(404).send('Cart item not found');
      }
  
      res.status(200).json(cartItem);
    } catch (err) {
      console.error('Error fetching cart item:', err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  
export default cartRouter;
