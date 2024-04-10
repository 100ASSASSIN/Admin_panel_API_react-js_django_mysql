import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useCookies } from 'react-cookie';
const navigate = () => {
    window.location.replace("/assassin");
}

function ApiData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('http://localhost:8000/api/api/')
            .then(response => response.json())
            .then(data => {
                // Extracting the message array from the API response
                const messages = data[0].message;
                setData(messages);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
         
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        ID: {item[0]}, Name: {item[1]}, Password: {item[2]}
                    </li>
                ))}
            </ul>
            <button id="ut2" type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={() => navigate(-1)}>
        Go Back
      </button>
        </div>
    );
}

const Users = () => {
    const [cookies] = useCookies(['user']);

    useEffect(() => {
        checkUser();
    }, [cookies.user]); // Include cookies.user in the dependency array

    function checkUser() {
        if (!cookies.user) {
            // User is not logged in, redirect to '/assassin'
            window.location.replace("/assassin");
        }
    }

    return (
        <div>
            <Helmet>
                <title>Users</title>
            </Helmet>
            <h1>Users Page</h1>
            <ApiData />
        </div>
    );
}

export default Users;
