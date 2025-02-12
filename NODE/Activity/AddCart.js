const readline =require ('readline');

const rl =readline.createInterface({
    input: process.stdin,
    output :process.stdout,
});

let cart = new Map();
let id = 1;

function Menu(){
    console.log('= = = = Shopping Cart = = = = ');
    console.log('1 .Add product');
    console.log('2 .Update product quantity');
    console.log('3 .Remove product');
    console.log('4 .View cart');
    console.log('5 .Clear cart');
    console.log('6 .Exit');
    rl.question('Enter a input : ',HandleOption)
}
    
 function HandleOption(option){
    switch (option) {
        case '1':{
            rl.question('Enter product name : ',ProductName =>{
                ProductName=ProductName.trim()
                  
                    if(ProductName){
                    rl.question('Enter Product price : ',ProductPrice =>{
                        ProductPrice = ProductPrice.trim()
                        
                             if (ProductPrice){
                                rl.question('Enter product Quantity : ',ProductQuantity => {
                                    ProductQuantity=ProductQuantity.trim()
                                    if(ProductQuantity){
                                        
                                        AddProduct(ProductName,parseFloat(ProductPrice),parseInt(ProductQuantity))
                                    }else{
                                        console.log('Enter Product quantity');
                                        
                                    }
                                })
                             }else{
                                 console.log('Product price cannot be empty');
                                 return Menu()
                             }
                    })
                    }else{
                        console.log('Product name cannot be empty ');
                        return Menu();
                    }
            })
           
            break;
        }case '2':{
            rl.question('Enter product id : ',ID =>{
               rl.question('Enter new product Quantity : ', newQuantity => {
                UpdateQuantity(parseInt(ID),parseInt(newQuantity))
               })
            })
            break;
        }case '3':{
            rl.question('Enter Product ID',ID =>{
                removeProduct(parseInt(ID))
            })
            break;
        }case '4':{
         viewCart()
            break;
        }case '5':{
            ClearCart();
            break;
        }
        case '6':{
            rl.close();
            break;
        }
            
    
        default:{
            console.log('Enter valid input');
            
            Menu()
        }
    }
 }   
 

 function AddProduct(ProductName,ProductPrice,ProductQuantity){

    cart.set(id,{ProductName,ProductPrice,ProductQuantity})
    console.log(cart);
    id++;
    return Menu();
    
 }

 function UpdateQuantity(ID,newQuantity){
    if(cart.has(ID)){
        let product = cart.get(ID)
        product.ProductQuantity=newQuantity;
        console.log(`Updated quantity of ${product.ProductName} to ${product.ProductQuantity} `);
    }else{
        console.log('Invalid product ID');
         }
         return Menu();
 }
    
 function removeProduct(ID){
    if(cart.delete(ID)){
        console.log('Product removed from cart');
        

    }else{
        console.log('Invalid product ID');   
    }
    return Menu();
 }

 function viewCart(){
    if (cart.size === 0) {
        console.log("Cart is empty.");
        return;
      }
      let total = 0;
      console.log("\nShopping Cart:");
      cart.forEach((product, id) => {
        let subTotal = product.ProductPrice * product.ProductQuantity;
        total += subTotal;
        console.log(`ID: ${id}, Name: ${product.ProductName}, Price: ${product.ProductPrice}, Quantity: ${product.ProductQuantity}, Subtotal: ${subTotal}`);
      });
      if (total > 500) {
        total *= 0.95; 
        console.log("5% discount applied.");
      }
      console.log(`Total Price: ${total.toFixed(2)}`);
      return Menu();
 }
 
 function ClearCart(){
    cart.clear();
    console.log('| | | |  Cart cleared  | | | |');
    return Menu();
 }
 
 Menu();   
    
    
    