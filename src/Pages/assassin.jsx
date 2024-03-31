import React, { useState } from 'react';
import { Helmet } from "react-helmet";
class Application extends React.Component {
    render () {
      return (
          <div className="application">
              <Helmet>
                  <meta charSet="utf-8" />
                  <title>LOGIN PAGE</title>
                  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
              </Helmet>
              ...
          </div>
      );
    }
  };
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            <Application />
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '50px', backgroundColor: '#f7f7f7', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2 style={{ color: 'black' }}>Login</h2>
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
        </div></div>
    );
}
export default Login;