import { Helmet } from "react-helmet";
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from "react";
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
        <h1>API Data</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              ID: {item[0]}, Name: {item[1]}, Password: {item[2]}
            </li>
          ))}
        </ul>
      </div>
    );
  }

const Users = () => {
    const [cookies] = useCookies(['user']);

    useEffect(() => {
        checkUser();
    }, []); // Added empty dependency array

    function checkUser() {
        if (cookies.user) {
            // User is logged in
            console.log("User is logged in:", cookies.user);
        } else {
            // Redirect to '/assassin' if user is not logged in
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
