const readline1=require('readline')

const rl=readline1.createInterface({
    input:process.stdin,
    output:process.stdout
})

let array=[];
function Menu(){

    
    console.log(".......Task Manager.......")
    console.log('1.add');
    console.log('2.list');
    console.log('3.exit');
    
    rl.question('enter a input..: ',handleOption)
}
function handleOption(input){
        switch (input){
            case "1":{
                
                rl.question('Enter a task :',(task1)=>{
                       task2=task1.trim();
                    
                    if(task2!==""){
                        array.push(task2);
                        console.log(`${task2} Added to list`);
                        
                        
                        Menu()
                    }else{
                        console.log("Enter valid task");
                        Menu()
                    }
                })
                
                break;
            }case "2":{
                if(array.length>0){
                    console.log(array)
                }else{
                    console.log('No task added');
                    
                }
                
                Menu();
                break;
            }case "3":{
                
                rl.close();
                break;
            }default:{
                console.log('Invalid Input');
                Menu();
                break;
                
            }
        }
        
    }

Menu()


