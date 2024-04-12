import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { useCookies } from 'react-cookie';
import '../view_panel/icons/tab.css';

function Login() {
    const [cookies, setCookie] = useCookies(['user']);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(cookies.user ? true : false); // Check if user is already logged in from cookies

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            });

            // Convert response to JSON
            const responseData = await response.json();

            // Handle response
            if (response.ok) {
                // Login successful
                setCookie('user', responseData.user, { path: '/' }); // Set user cookie
                setIsLoggedIn(true); // Set login status to true
            } else {
                // Login failed
                setError(responseData.message || 'Invalid username or password');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error:', error);
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    if (isLoggedIn) {
        return (
            window.location.replace("/panel")
        );
    }

    return (
        <div id='page'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>LOGIN PAGE</title>
                <link rel="shortcut icon" href="https://cdn.oaistatic.com/_next/static/media/favicon-32x32.be48395e.png" />
            </Helmet>
            <div id='loog' style={{ maxWidth: '400px', margin: '0 auto', padding: '40px', backgroundColor: '#f7f7f7', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h3 style={{ color: 'black',  }}>Login</h3><br></br>
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ fontWeight: 'bold' }}>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ fontWeight: 'bold' }}>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>
                    {error && <p style={{ color: '#007bff' }}>{error}</p>}
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
                </form>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div id='log'>© 2017-2024 Copyright ASSASSIN UNIVERSAL STUDIOS. Terms of Use · Privacy Policy .</div>
        </div>
    );
}

export default Login;
