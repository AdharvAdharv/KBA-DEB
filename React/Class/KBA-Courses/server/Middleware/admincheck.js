function admincheck(req,res,next){
    
    if(req.role == 'Admin'){

        next();
    }else{
        console.log("You are not allowed to do this");
        res.status(400).send('You are not allowed to do this')
        
    }
    
}
export default admincheck;