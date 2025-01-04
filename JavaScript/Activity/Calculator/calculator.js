function display(digit){
    document.getElementById("screen").value+=digit;
    console.log(digit);
    
}
function clear(){
    document.getElementById("screen").value="";
    console.log("hi")
}
function equalto(){
    
    const result=document.getElementById("screen").value;
    const result1=eval(result)
    document.getElementById("screen").value=result1
    console.log(result1);
    
    
    
}