import React from 'react';
import { useNavigate } from 'react-router-dom';

const OpeningPage = () => {
    const Navigate = useNavigate();

    return(
        <div>
            <h2>Welcome to Task Manager : </h2>
            <button onClick={() => Navigate('/login')}>Login</button>
            <button onClick={() => Navigate('/register')}>NewUSer</button>
        </div>
        
    )
}

export default OpeningPage;