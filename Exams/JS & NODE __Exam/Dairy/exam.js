const readline= require ('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});


let mapData=new Map();       

function option(){
    console.log('-------Dairy-------');
    
    console.log('1=write dairy');
    console.log('2=Show dairy');
    console.log('3=Exit');
    
    rl.question('Enter a input : ',selectoption)
    
}
function selectoption(value){
    if(value == 1){
        WriteNote();
       
        
    }else if(value == 2){
      Shownote();

    }else if(value == 3){
        rl.close()
    }
    else {
       console.log('= = Enter valid value = =');
        option();
    }
    }
function WriteNote(){

    rl.question('Enter date (YYYY-MM-DD) : ',(date)=>{

        if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            console.log("Invalid date format! Use YYYY-MM-DD.");
            return WriteNote();
        }
            
        month=date.slice(5,7)
        console.log(month);
        console.log(date);
        

        if(month <13 && month >0){
            rl.question('Enter Your note : ',(note)=>{
                note=note.trim()
                if(note){
                    if(mapData.has(date)){
                        mapData.get(date).push(note)
                        console.log(`${note} added in ${date} th month` );
                        
                    }else{
                        mapData.set(date,[note]);
                        console.log(`${note} added in ${date} th month` );
                        console.log(mapData);
                        
                    }
                    option();

                }else{
                    console.log("Enter valid input");
                    return selectoption(1);                        
                }
            })    
        }else{
            console.log('Invalid month');
            return selectoption(1);
            
        }
    });

}

function Shownote(){
    rl.question('Enter date (YYYY-MM-DD) : ',(date)=>{

        if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            console.log("Invalid date format! Use YYYY-MM-DD.");
            return Shownote();
        }

        if(mapData.has(date)){
            console.log(mapData.get(date).join('\n'));
            
        }else{
            console.log('Data not found or Invalid Date');
            
        }
        option();
    });
    
}

option()
