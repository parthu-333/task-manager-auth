const Todo = require('../models/Todo');

exports.getTodos = async(req, res) =>{
    const todos = await Todo.find({userId : req.user});
    res.json(todos);
}

exports.createTodo = async(req, res) => {
    const {text} = req.body;
    const todo = await Todo.create({text, userId : req.user});
    res.status(201).json(todo);
}

exports.updateTodo = async(req, res) => {
    const {id} = req.params;
    const {text, completed} = req.body;

    const todo = await Todo.findOneAndUpdate(
        {_id : id, userId : req.user},
        {text, completed},
        {new : true}
    );

    if(!todo) return res.status(404).json({msg : 'Todo not found'});
    res.json(todo);
}

exports.deleteTodo = async(req, res) => {
    const {id} = req.params;
    const todo = await Todo.findOneAndDelete({_id : id, userId : req.user});

    if(!todo) return res.status(404).json({msg : "Todo not found"});
    res.json({msg : "Deleted Successfully"});
};