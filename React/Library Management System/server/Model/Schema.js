import mongoose , { model,Schema } from "mongoose";



const userdetails = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,required:true}, 
})
const User = model ('UserDetails',userdetails)

const Bookdetails= new Schema({
    bookName:{type:String,required:true,unique:true},
    authorName:{type:String,required:true},
    genre:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    bookImage:String,
},{ timestamps: true })
const Books = model ('Books',Bookdetails)

const cartSchema = new Schema({
    userId: { type: String, required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Books' },
    bookName: String,
    price: Number,
    quantity: { type: Number, default: 1 },
  });
  const Cart = model('Cart', cartSchema);
  

  const orderSchema = new Schema({
    userId: { type: String, required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Books' },
    bookName: String,
    price: Number,
    bookImage: String,
    orderDate: { type: Date, default: Date.now }
  });
  const Order = model('Order', orderSchema);
  
 
  
  
export { Cart , Books , User , Order }
