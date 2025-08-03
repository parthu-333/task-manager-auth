import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OpeningPage.css';
const OpeningPage = () => {
    const Navigate = useNavigate();

    return(
        <div className='opening-contaner'>
            <div id ='HI'>
                <h2>Welcome to Task Manager : </h2>
                <p style={{ color: 'gray', fontSize: '0.9rem', marginBottom: '1rem' }}>
                ⚠️ Note: Server may take 20–30 seconds to start on the first visit. Please wait after clicking Login or Register.
                 </p>
                <button onClick={() => Navigate('/login')}>Login</button>
                <button onClick={() => Navigate('/register')}>NewUSer</button>
            </div>
        </div>
        
    )
}

export default OpeningPage;