import React, {useState, useEffect} from 'react'
import API from '../api';

const DashBoard = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    useEffect(()=>{
        fetchTodos();
    }, []);

    const fetchTodos = async () =>{
        try{
            const res = await API.get('/todos');
            setTodos(res.data);

        }
        catch(err){
            console.error("Error fetching the Todos", err);
        }
    };

    const handleAddTodo = async (e) => {
        e.preventDefault();
        if(!newTodo.trim()) return;
        try{
            const res = await API.post('/todos', {text : newTodo});
            setTodos([...todos, res.data]);
            setNewTodo("");
        }
        catch(err){
            console.error("Error adding the Todo", err);
        }
    }
    const handleDelete = async (id) => {
        try{
            await API.delete(`/todos/${id}`);
            setTodos(todos.filter(todo => todo._id !== id));
        }
        catch(err){
            console.error("Error deleting the Todo", err);
        }
    };
    const handleToggle = async(id, currrentStatus) => {
        try{
            const res = await API.put(`/todos/${id}`, {
                completed : !currrentStatus
            });
            setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
        }
        catch(err){
            console.error("Error updating the todo", err);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
    <div>
      <h2>Your ToDos</h2>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="New todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo._id, todo.completed)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo._id)}>❌</button>
          </li>
        ))}
      </ul>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashBoard;
