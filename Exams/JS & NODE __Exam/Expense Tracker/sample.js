const readline= require ('readline')
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

  let MapEXP= new Map();
  
  
  function mainMenu(){
    console.log('------Main Menu------');
    console.log('1 = Add expense');
    console.log('2 = Show expense');
    console.log('3 = Exit');
    rl.question('Enter a value :',options)
    
  }
  function options(option){
      if(option==1){
        rl.question('Enter catogory eg:(Food,Transport,etc) : ' ,(catogory)=>{
          rl.question('Enter amount : ',(amount)=>{

            amount=parseInt(amount)
            if(amount){

            
            rl.question('Enter date (YYYY-MM-DD) : ',(date)=>{
              date=date.slice(5,7)
              if(date>12 && date <1){
              
 
              if(MapEXP.has(date)){
              MapEXP.get(date).push(amount)
              console.log(MapEXP);
              
             }else{
              MapEXP.set(date,[amount])
              console.log(MapEXP);
              
             } 
             console.log(`Expense ${amount} has added to month ${date}`);
             mainMenu();
            }else{
              console.log('Invalid month');
              mainMenu();
            }
            })
          }else{
            console.log('Invalid Amount');
            mainMenu();
            
          }
          })
        })

      } else if(option==2){
        rl.question('Enter month between "1 and 12 " : ',(month)=>{
            if(MapEXP.has(month)){
              let expense= MapEXP.get(month)
              let TotalEXP= expense.reduce((sum,num)=>sum+num,0)
              console.log(`Total expense is ${TotalEXP}`);
              
            }else{
              console.log('Data Not Found');
              
            }
            options();
        })

      }else if(option == 3){
        rl.close();
      }else{
        console.log('Enter valid value');
        mainMenu();
      }
  }
    
    mainMenu();
    
