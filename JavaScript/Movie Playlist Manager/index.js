    const movie=[];
    const priority=[];
    function addMovie(){
        
        let movievalue1=document.getElementById("movieName").value.trim();
        
        if(movievalue1==""){
            alert("Enter a valid value")
        }else{
        let priority1=document.getElementById("priority").value;
        let list1=document.getElementById("list");
    
        document.getElementById("movieName").value="";
        
        movie.push(movievalue1)
        console.log(movie);
        
        
        priority.push(priority1);
        console.log(priority);
        
        let li=document.createElement("li");
        let btn1=document.createElement("button");
        let btn2=document.createElement("button");
        let btn3=document.createElement("button");
        
        
        li.textContent=movievalue1;
        btn1.textContent="Watched";     
        btn2.textContent="Edit";
        btn3.textContent="Remove"
        
        
        if(priority1==1){
            li.className="red"
        }else if(priority1==2){
            li.className="yellow"
        }else {
            li.className="green"
        }
        
    btn1.className="clbtn1"
    btn2.className="clbtn2"
    btn3.className="clbtn3"
    
    
    
    li.appendChild(btn1);
    li.appendChild(btn2);
    li.appendChild(btn3);
    list1.appendChild(li);
    
    
    btn1.onclick=function(){
            li.className="strike"
            
        }
        btn2.onclick=function(){
            let newMovie= prompt ('Edit Movie Name :',movievalue1)
            let newpriority=prompt('Edit Priority (1,2,3):',priority1)
            if(newpriority!==priority1){
                priority1=newpriority;
            
                if(priority1==1){
                    li.className="red"
                }else if(priority1==2){
                    li.className="yellow"
                }else {
                    li.className="green"
                }
            
            }
            if (newMovie && newMovie !== movievalue1) {
                movievalue1 = newMovie.trim(); 
                li.firstChild.textContent = movievalue1;
            }
        }
        
        btn3.onclick=function(){
            list1.removeChild(li)
        }
    }   
        }
            