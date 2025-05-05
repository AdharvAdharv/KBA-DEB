import jwt from 'jsonwebtoken';

function authenticate(req,res,next){
    console.log('auth page');

    const cookie=req.headers.cookie;
    
    
    if(!cookie){
        res.status(401).send('Please login to contunue')
        console.log('Please login to continue ');
        
    }else{
        const [name,token]=cookie.trim().split('=')
        console.log(name);
        console.log(token);
        
        if(name == 'authToken'){
            const varified=jwt.verify(token,process.env.SECRET_KEY)
            
            
            req.user=varified.UserId;
            req.role=varified.role;
            next();
            

        }else{
            res.status(401).send('Unauthorised Status')
        }
    }
    
}
export{ authenticate}