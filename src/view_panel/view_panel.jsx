import React from "react";
import { Helmet } from "react-helmet";
import { useCookies } from 'react-cookie';
import '../Components/nav.css';
import { Link } from 'react-router-dom';
import'../view_panel/icons/icons.css'
import YourComponent from "./users_count";
import YourOrders from "./orders_count ";
import Items from "./items";
import  { useState, useEffect } from "react";
import ApiData from './user';
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

function Check() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/hello-world/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div className="assassin-container">
      <div id="msg">
        <h4>{message}</h4>
      </div>
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
    window.location.replace("/")
  };
 
  return (
    <div id='panel'>
      <div id="Dashborad"></div>
      <New/>
      <Link to="/Users"><div id="Users"><div class="all"></div><h2>List of users <YourComponent /></h2></div></Link>
      <Link to="/Orders"><div id="orders"><div class="all"></div><h2> Total Orders <YourOrders /></h2></div></Link>
      <Link to="/new"><div id="items"><div class="all"></div><h2>list of Items <Items /></h2></div></Link>
      <Link to="/Profi"><div id="Profi"><h3><div class="all"></div><div id ="texts">Profile</div></h3></div></Link>
     <div id="view"> 
     <marquee>
     <h3 style={{color:'green'}}><Check /></h3>
</marquee>

<h4>1. **Product Management**: Allow admins to add, edit, and delete products. They can specify product details like name, description, price, quantity, images, categories, and tags.</h4>

<h4>2. **Inventory Management**: Provide a dashboard to monitor inventory levels, receive notifications for low stock, and manage replenishment orders.</h4>

<h4>3. **Order Management**: Enable admins to view and manage orders, including order status updates, order cancellation, and order history. They can also generate invoices and packing slips.</h4>

<h4>4. **Customer Management**: Allow admins to manage customer accounts, view customer details, track customer orders, and handle customer inquiries or support requests.
<h4>5. **Category and Tag Management**: Provide tools to create, edit, and organize product categories and tags for easier navigation and filtering on the storefront.</h4>

<h4>6. **Discounts and Promotions**: Enable admins to create and manage discount codes, coupons, promotional campaigns, and special offers to attract and retain customers.</h4>
</h4>
     </div>
     <div id="view2"><iframe width="560px" height="400px" src="https://www.youtube.com/embed/3RidOEgikAw?si=niuCyfhBt2gTfee0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
     <div id="ttt"></div>
     <div id="view3">
      <ApiData/></div>
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
