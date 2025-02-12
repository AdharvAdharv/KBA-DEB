const readline=require ('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const movies=[];
let priorities=[];

function addmovie(){
    rl.question('Enter movie name :' ,storeMovie)
   
    
    
}
function storeMovie(movie){
    movies.push(movie);
   
    console.log(movies);
   
    rl.question("\n ----Choose a option----\n  1=Add movie \n  2=Remove \n",handleOption);

 function handleOption(option1){   
    switch (option1) {
        case '1':{
              addmovie();
              break;
        }
        case '2':{
            rl.question("Enter movie position of array want to remove",(position)=>{
                removeMovie(position)
            });

            function removeMovie(position){
                console.log('removing...');
                position=parseInt(position)
                position=position-1
                movies.splice(position,1)
                console.log(`array after deletion ${movies}`)
                
            
               
            }
            
            break;
        }
            
        default:{
            console.log('end');
            break;
        }
    }
}
            
            
    
    
}
addmovie();