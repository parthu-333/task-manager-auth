import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const Register = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();

    const handleRegister = async (e) =>{
        e.preventDefault();

        try {
            const res = await API.post('/auth/register', {username, password});
            localStorage.setItem('token', res.data.token);
            Navigate('/dashboard');
        }
        catch(err){
            alert("Registration failed");
        }
    };

    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange = {(e) => setUsername(e.target.value)}
                    required
                /><br/>
                <input
                    type="password"
                    placeholder="password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    required
                /><br/>
                <button type = "submit">Register</button>
            </form>
        </div>
    );
}

export default Register;