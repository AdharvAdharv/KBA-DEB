import jwt from 'jsonwebtoken'
function authenticate(req,res,next){
    console.log("hi");
    
    const cookie = req.headers.cookie;
    console.log(cookie);

    if(!cookie){
        console.log("please login to continue");
        res.status(401).send("Please login to continue")
        
    }
    else{
    const [name,token] = cookie.trim().split('=');
    console.log(name);
    console.log(token);
    if(name=='authtoken'){
        const varified =  jwt.verify(token,process.env.SECRET_KEY)
        console.log(varified);
        req.user = varified.UserName;
        req.role = varified.UserRole;
        next();
    }
    else{
        res.status(401).send("Unauthorised Access ");
    }
}
}

export {authenticate}