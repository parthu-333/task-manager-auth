import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OpeningPage.css';
const OpeningPage = () => {
    const Navigate = useNavigate();

    return(
        <div className='opening-contaner'>
            <div id ='HI'>
                <h2>Welcome to Task Manager : </h2>
                <button onClick={() => Navigate('/login')}>Login</button>
                <button onClick={() => Navigate('/register')}>NewUSer</button>
            </div>
        </div>
        
    )
}

export default OpeningPage;