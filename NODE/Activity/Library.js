const readline = require ('readline')

const rl= readline .createInterface({
    input: process.stdin,
    output: process.stdout
});

Menu();

let library = new Map();
let id= 100

function Menu(){
    console.log('= = = = Library = = = =')
    console.log('1 .Add Book');
    console.log('2 .Show all Book');
    console.log('3 .Borrow a Book');
    console.log('4 .Return a Book');
    console.log('5 .Delete a Book');
    console.log('6 .Exit');
    
    rl.question('Enter a input : ',handleOption)  
}

function handleOption(option){

    switch (option) {
        case '1':{
        rl.question('Enter book name : ',BookName =>{
            BookName=BookName.trim()
              
                if(BookName){
                rl.question('Enter author name : ',AuthorName =>{
                    AuthorName = AuthorName.trim()
                    
                         if (AuthorName){
                         Addbook(BookName,AuthorName)
                         }else{
                             console.log('Author name cannot be empty');
                             return handleOption('1')
                         }
                })
                }else{
                    console.log('Book name cannot be empty ');
                    return handleOption('1');
                }
        })
       
        break;
        }case '2':{
            if(library.size === 0){
                console.log('Library is empty');
                
            }else{
                console.log('___Available books____');
                library.forEach((book,bookID) =>{
                    console.log(`ID : ${bookID} , Name: ${book.BookName}  ,Author : ${book.AuthorName} Status : ${book.status}`);
                    
                } )

            }
            Menu();
            break;
        }case '3':{
            rl.question("Enter Book ID you want to BORROW : ",ID => {
                borrowBook(parseInt(ID))
            })
            break;
        }case '4':{
            rl.question('Enter Book ID you want to RETURN : ',ID => {
                returnBook(parseInt(ID))
            })
            break;
        }case '5':{
            rl.question('Enter Book id you want to DELETE : ', ID =>{
               deleteBook(parseInt(ID))
            })
            break;
        }
        case '6':{
            rl.close();
            break;

        }
    
        default:{
            console.log('......Invalid input......\n');
            return Menu()
            
    }}
}

function Addbook(BookName,AuthorName){


    library.set(id,{BookName,AuthorName,status:'Available'})
    console.log(library);
    id++;
    return Menu()
}

function borrowBook(ID){
  if( library.has(ID)){
           let book =library.get(ID)
          
           if( book.status == 'Available'){
           book.status='Borrowed'
           library.set(ID,book)
          
           console.log(`You borrowed ${book.BookName}`);
           return Menu();
           }else{
               console.log('Book not available');
               return Menu()
           }
  }else{
    console.log('Book ID not valid');
    return Menu()
  }
}

function returnBook(ID){
    if (library.has(ID)){
        let book = library.get(ID)
           
            if(book.status == 'Borrowed'){
                book.status='Available'
                library.set(ID,book)
                console.log(`You returned ${ book.BookName}` );
                
            }else{
                console.log('Book is not Borrowed');
            }
           return Menu()     
    }else{
        console.log("Book ID not valid");
        return Menu()
    }
}

function deleteBook(ID){
    if(library.has(ID)){
      library.delete(ID)
      console.log('Book deleted Successfully');
      
    }else{
        console.log("Book ID not valid");
    }
    return Menu()
}