import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useCookies } from 'react-cookie';
import '../Components/nav.css';
import { Link } from 'react-router-dom';

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
    window.location.replace("/")
  };

  return (
    <div id='panel'>
      <div id="Dashborad"></div>
      <New />
      <button id='but' onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>{/* Add logout button */}
      <Link to="/Users"><div id="Users">List of users</div></Link>
      <Link to="/Users"><div id="items">list of Items</div></Link>
      <Link to="/Users"><div id="orders">Orders</div></Link>
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
