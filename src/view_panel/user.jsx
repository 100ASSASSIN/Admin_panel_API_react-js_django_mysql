import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useCookies } from 'react-cookie';
import './icons/tab.css';

const navigate = () => {
    window.location.replace("/assassin");
}
const remove = () => {
    window.location.replace("/users_del");
  };
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
            <div id='ord'>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>mail</th>
                        <th>contact</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td style={cellStyle}>{item[0]}</td>
                            <td style={cellStyle}>{item[1]}</td>
                            <td style={cellStyle}>{item[2]}</td>
                            <td style={cellStyle}>{item[4]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <button id="ut2" type="submit" style={buttonStyle} onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
}

// Internal CSS styles
const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid #ddd', // Adding border to the table
};

const cellStyle = {
    border: '1px solid #ddd', // Adding border to table cells
    padding: '8px', // Adding padding to table cells
};

const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};


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
            <h1 style={{padding:'15px'}}>List of Users</h1>
            <ApiData />
            <div id="tip"> <button onClick={() => remove(-1)} style={{ padding: '10px 90px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>- Remove users</button></div>
            <div id='log' style={{color: '#007bff',paddingTop:'200px', paddingLeft:'250px'}}>© 2017-2024 Copyright ASSASSIN UNIVERSAL STUDIOS. Terms of Use · Privacy Policy .</div>
        </div>
    );
}

export default Users;
