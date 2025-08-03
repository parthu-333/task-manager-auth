const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createToken = (userID) =>{
    return jwt.sign({id : userID}, process.env.JWT_SECRET, {expiresIn : '1d'});
};

exports.register = async (req, res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;
        
        const exist = await User.findOne({username});

        if(exist) return res.status(400).json({msg : 'User already exists'});

        const user = await User.create({username, password});

        const token = createToken(user._id);

        res.status(201).json({token});
    }
    catch(err){
        res.status(500).json({msg : 'Registation failed', err});
    }
};
exports.login = async (req, res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({username});
        if(!user){
           return res.status(400).json({msg : 'User not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)return res.status(400).json({msg : "Wrong credentials"});

        const token = createToken(user._id);

        res.status(200).json({token});

    }
    catch(err){
        res.status(500).json({msg :"Login failed", err});   
    }
}