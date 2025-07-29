import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import API from '../api';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        try{
            const res = await API.post('/auth/login', {username, password});
            localStorage.setItem('token', res.data.token);
            //Navigate('/dashboard')
            window.location.href = '/dashboard';
        }
        catch(err){
            alert("Login failed");
        }
    };

    return(
        <div>
            <h2>Login : </h2>
            <form onSubmit={handleLogin}>
                <input
                    type = "text"
                    placeholder = "Username"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                    required
                /><br/>
                <input
                    type = "password"
                    placeholder = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    required
                /><br/>
                <button type = "submit">Login</button>
            </form>
        </div>
    );
}
export default Login;