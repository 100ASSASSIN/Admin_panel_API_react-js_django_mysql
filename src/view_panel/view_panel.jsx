import React from "react";
import { Helmet } from "react-helmet";
import { useCookies } from 'react-cookie';
import '../Components/nav.css';
import { Link } from 'react-router-dom';
import'../view_panel/icons/icons.css'
import YourComponent from "./users_count";
import YourOrders from "./orders_count ";
import Items from "./items";


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
      <Link to="/Users"><div id="Users"><div class="all"></div><h2>List of users <YourComponent /></h2></div></Link>
      <Link to="/Orders"><div id="orders"><div class="all"></div><h2> Total Orders <YourOrders /></h2></div></Link>
      <Link to="/new"><div id="items"><div class="all"></div><h2>list of Items <Items /></h2></div></Link>
      <Link to="/Profi"><div id="Profi"><h2><div class="all"></div>Profile</h2></div></Link>
     
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
