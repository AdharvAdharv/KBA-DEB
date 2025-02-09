import jwt from 'jsonwebtoken';

function authenticate(req,res,next){
    console.log('---Authenticating---');
    
    const cookie=req.headers.cookie;
    console.log(cookie);
    
    try{
    if(!cookie){
        res.status(401).send('Please Login to continue');
        console.log("Please Login to contunue");
        
    }else{
        const [name,token]=cookie.trim().split('=');
        console.log(name);
        console.log(token);

        if(name == 'authToken'){
            const verified = jwt.verify(token,process.env.SECRET_KEY)
            console.log(verified);
            next();
                 
        }else{
            res.status(401).send('Unauthorised Status')
            console.log('Unauthorised Status');
        }     
    }
    }catch(error){
        if(error.name ==='TokenExpiredError' ){
            res.status(401).send('Please Login to continue')
            console.log('Please Login to continue');
            
        }else{
            console.log('Invalid token');
            
        }
    }
            
    
    
    
}
export default authenticate;