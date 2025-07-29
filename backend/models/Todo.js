const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({
    text : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : 'User',
        required : true
    }
 }, {timestamps : true});

module.exports = mongoose.model('Todo', todoschema);