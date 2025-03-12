import express from 'express';
import { items } from './Model/model.js';

const adminauth = express();

adminauth.post('/additem',async (req,res) =>{    
    try{
    const {ItemName,Catogory,Quantity,Price} = req.body;
    console.log(ItemName,Catogory,Quantity,Price);
    

    const existItem = await items.findOne({itemName:ItemName})
    if(existItem){
        console.log('Item already added');
        res.status(401).send('Item already added')  
        
    }else{

    const itemdetails = new items({
        itemName:ItemName,
        catogory:Catogory,
        quantity:Quantity,
        price:Price
    })
   await itemdetails.save()
   console.log('Item added Successfully');
   res.status(201).send("Item added Successfully")
   
    }
}catch{
    res.status(500).send('Internal server error')
}
    
})

adminauth.delete('/deleteitem',async (req,res) =>{
    try{

    const {name} = req.body;
    console.log(name);
    

     const existItem1 = await items.findOne({itemName:name})
     console.log(existItem1);
     
    if(existItem1){
        await items.findOneAndDelete({itemName:name})
       
        console.log('item deleted');
        res.status(200).send('Item deleted')
       
        
    }else{
        console.log('Item not found');
        res.status(403).send('Item not found')
        
    }
}catch{
    res.status(500).send('Internal server error')
}
})

adminauth.get('/showitem',async (req,res) =>{
    try{
    
    const allItems = await items.find()
    console.log(allItems);
    res.json(allItems)
    }catch{
        res.status(500).send('Internal server error')
    }
    
})

adminauth.put('/update', async (req,res) =>{
    try{

    const {ItemName,Catogory,Quantity,Price} = req.body;

    const result = await items.findOne({itemName:ItemName})
    if(result){
        result.catogory=Catogory;
        result.quantity=Quantity;
        result.price= Price;
        await result.save()
        
        console.log(`${result.itemName} is updated`);
        res.status(200).send('item updated')


    } else{
        console.log('Item not found');
        res.status(400).send('Item not found')
        
    }
}catch{
    res.status(500).send('Internal server error')
}
    
})

adminauth.get('/showcatogory',async (req,res) =>{

    try{
    
    const {Catogory} = req.body;
    console.log(Catogory);
    

    const results = await items.find({catogory:Catogory})
    console.log(results);
    
    
    }catch{
        res.status(500).send('Internal server error')
    }
})

export {adminauth}