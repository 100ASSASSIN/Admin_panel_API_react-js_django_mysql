import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useCookies } from 'react-cookie';
import '../Components/nav.css';
import { Link } from 'react-router-dom';
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

function View() {
  const [cookies, setCookies, removeCookies] = useCookies(); // Add setCookies

  const handleLogout = () => {
    // Iterate over each cookie and remove it
    for (const cookie in cookies) {
      removeCookies(cookie);
    }
    // Update cookies state to an empty object
    setCookies({});
    // Reload the page after deleting cookies
    window.location.replace("/about")
  };

  return (
    <div id='panel'>
      <div id="Dashborad"></div>
      <New />
      <ApiData />
      <button id='but' onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>{/* Add logout button */}
      <Link to="/Users"><div id="Users">List of users</div></Link>
    </div>
  );
}
class  New extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My ASSASSIN</title>
          <link rel="shortcut icon" href="https://cdn.oaistatic.com/_next/static/media/favicon-32x32.be48395e.png" />
        </Helmet>
      </div>
    );
  }
};

export default View;
