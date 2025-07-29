const jwt = require('jsonwebtoken');

const authmiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]

    if(!token) return res.status(401).json({msg : "No token, access denied"});
    
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode.id;
        next();
    }
    catch(err) {
        res.status(401).json({msg : "Invalid token"});

    }
}
module.exports = authmiddleware;