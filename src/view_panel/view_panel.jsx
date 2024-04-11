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

function Check() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/check/")
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
      <h1>Check</h1>
      <div id="msg">
        <h3>{message}</h3>
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
      <New />
      <Link to="/Users"><div id="Users"><div class="all"></div><h2>List of users <YourComponent /></h2></div></Link>
      <Link to="/Orders"><div id="orders"><div class="all"></div><h2> Total Orders <YourOrders /></h2></div></Link>
      <Link to="/new"><div id="items"><div class="all"></div><h2>list of Items <Items /></h2></div></Link>
      <Link to="/Profi"><div id="Profi"><h2><div class="all"></div>Profile</h2></div></Link>
     <div id="view"><h1>Key test</h1>

     

<h4>1. **Product Management**: Allow admins to add, edit, and delete products. They can specify product details like name, description, price, quantity, images, categories, and tags.</h4>

<h4>2. **Inventory Management**: Provide a dashboard to monitor inventory levels, receive notifications for low stock, and manage replenishment orders.</h4>

<h4>3. **Order Management**: Enable admins to view and manage orders, including order status updates, order cancellation, and order history. They can also generate invoices and packing slips.</h4>

<h4>4. **Customer Management**: Allow admins to manage customer accounts, view customer details, track customer orders, and handle customer inquiries or support requests.

<h4>5. **Category and Tag Management**: Provide tools to create, edit, and organize product categories and tags for easier navigation and filtering on the storefront.</h4>

<h4>6. **Discounts and Promotions**: Enable admins to create and manage discount codes, coupons, promotional campaigns, and special offers to attract and retain customers.</h4>

<h4>7. **Analytics and Reporting**: Offer insights into sales performance, revenue trends, popular products, customer demographics, and website traffic. Generate reports for analysis and decision-making.</h4>

<h4>8. **User Permissions and Roles**: Implement role-based access control to restrict access to certain features or data based on user roles (e.g., admin, manager, staff).</h4>

<h4>9. **Content Management**: Allow admins to manage website content such as pages, blog posts, FAQs, and banners to keep the site updated and engaging.</h4>

<h4>10. **Shipping and Tax Configuration**: Provide settings to configure shipping options, shipping rates, tax rates, and delivery zones to accurately calculate shipping costs for orders.</h4>

<h4>11. **Payment Gateway Integration**: Integrate payment gateways to securely process online payments from customers. Admins can configure payment methods and view transaction history.</h4>

<h4>12. **Security and Compliance**: Implement security measures like HTTPS, encryption, and user authentication to protect sensitive data. Ensure compliance with regulations such as GDPR or PCI DSS.</h4>

<h4>13. **Localization and Multi-language Support**: Support multiple languages and currencies to cater to a global audience. Allow admins to manage translations and localize content.</h4>

<h4>14. **Email Notifications**: Set up automated email notifications for order confirmations, shipping updates, password resets, and other important events to keep customers informed.</h4>

<h4></h4>15. **Customization and Extensibility**: Provide options for customization and integration with third-party tools or extensions to extend the functionality of the admin panel according to specific business needs.</h4>
     
     </div>
     <div id="pop"><Check /></div>

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
