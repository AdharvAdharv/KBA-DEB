function admincheck(req,res,next){
  
    if(req.role == 'admin'){
      next()
    }else{
        console.log('Unauthorised Access');
        res.status(403).send("Unauthorised Access")
    }
        
}

export default admincheck;