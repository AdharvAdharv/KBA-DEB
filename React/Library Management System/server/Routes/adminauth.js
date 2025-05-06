import { Router } from "express";
import { authenticate } from "../Middleware/auth.js";

import { Books } from "../Model/Schema.js";
import admincheck from "../Middleware/admincheck.js";
import { upload } from "../Middleware/Multer.js";

const adminauth=Router();

const ConvertToBase64=(buffer)=>{
  return buffer.toString("base64");
}



adminauth.post('/addbook',authenticate,admincheck,upload.fields(
  [{name:'bookImage',maxCount:1},
     
  ]),async(req,res)=>{
    console.log("add book page");

    try{
        if(req.role == 'admin'){
            const {BookName,AuthorName,Genre,Description,Price}=req.body;

          const existBook = await Books.findOne({bookName:BookName})

              if( existBook ){
                res.status(400).send('Book already saved') 
                console.log('Book Name already exist');
                
              }else{

                let imageBase64_1=null;
                if(req.files && req.files['bookImage']){
                  imageBase64_1= ConvertToBase64(req.files['bookImage'][0].buffer);
              }

                const book = new Books({
                  bookName:BookName,
                  authorName:AuthorName,
                  genre:Genre,         
                  description:Description,
                  price:Price,
                  bookImage:imageBase64_1
                })
                await book.save()
                res.status(201).send('Book Added')
                console.log('Book Added');
              }

        }else{
            res.status(403).send('You are not allowed to do this')
        }  

    }catch{
        res.status(500).send('Internal server Error')
    }
    
})

adminauth.get('/getallbook', async (req, res) => {
  try {
    const books = await Books.find();

    if (books && books.length > 0) {
      res.status(200).json(books);
    } else {
      res.status(404).send("No books found");
    }

  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send("Internal Server Error");
  }
});



adminauth.get('/getbook',authenticate,async(req,res)=>{
  try{
    console.log('-----Show Book Page----');
    
    const book1=req.query.BookName;
    const result= await Books.findOne({bookName:book1});
     

    if(result){
      res.status(200).send( result);
      console.log(result);
      

    }else{
      console.log('Book not found');
      res.status(404).send('Book not found');
      
    }
    
    
  }catch{
    res.status(500).send('Internal Server Error')
  }
})

adminauth.put('/updatebook',authenticate,admincheck,async(req,res)=>{
  try{

    const {BookName,AuthorName,Genre,Description,Price}=req.body;
    const result = await Books.findOne({bookName:BookName})
    
    if(result){
      result.bookName = BookName;
      result.authorName=AuthorName;
      result.genre=Genre;
      result.description=Description;
      result.price=Price;

      console.log(result);
      await result.save();
      
      console.log("Book data Updated");
      res.status(400).send('Book data Updated')
      
      
      
    }else{
      console.log('Book not found');
      res.status(400).send('Book not found')
      
    }
 

  }catch{
    res.status(500).send('Internal server error')
  }

})


adminauth.delete('/deletebook',authenticate,admincheck,async(req,res)=>{
  const Name=req.body.BookName
  console.log( Name);
  const delete1 = await Books.findOne({bookName:Name})
 
 
  try{

    if(delete1){
     await Books.findOneAndDelete({bookName:Name})

      console.log('deleted');
      
      res.status(201).send('Book Deleted');
      

    }else{
      console.log('Book not found');
      res.status(400).send('Book not found')
      
    }

  }catch{
    res.status(500).send('Internal server error')
  }
  
})


adminauth.get('/logout',(req,res)=>{

  res.clearCookie('authToken')
  res.status(200).send('Successfully Logged out')
  console.log('Successfully Logged out');
  
})



export default adminauth;