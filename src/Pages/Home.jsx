import { Link } from 'react-router-dom';
import '../Components/nav.css';
const Home= () => {
	return (
		<div className="container">
			<div className="banner-container">
					<h2 style={{position:'absolute', top:'90px', paddingBottom:'40px'}}>ASSASSIN<br></br></h2>
					<Link to="/assassin">
						<div className="btn" style={{position:'absolute',  left:'570px', top:'120px'}}>Enter admin panel</div>
					</Link>
				<div id='admin'></div>
				<p><h3 id='p2'>functionalities you might have in your shopping admin panel:</h3>

<h4>1. **Product Management**: Allow admins to add, edit, and delete products. They can specify product details like name, description, price, quantity, images, categories, and tags.</h4>

<h4>2. **Inventory Management**: Provide a dashboard to monitor inventory levels, receive notifications for low stock, and manage replenishment orders.</h4>

<h4>3. **Order Management**: Enable admins to view and manage orders, including order status updates, order cancellation, and order history. They can also generate invoices and packing slips.</h4>

<h4>4. **Customer Management**: Allow admins to manage customer accounts, view customer details, track customer orders, and handle customer inquiries or support requests.

<h4>5. **Category and Tag Management**: Provide tools to create, edit, and organize product categories and tags for easier navigation and filtering on the storefront.</h4>

<h4>6. **Discounts and Promotions**: Enable admins to create and manage discount codes, coupons, promotional campaigns, and special offers to attract and retain customers.</h4>

<h4>7. **Analytics and Reporting**: Offer insights into sales performance, revenue trends, popular products, customer demographics, and website traffic. Generate reports for analysis and decision-making.</h4>

<h4>8. **User Permissions and Roles**: Implement role-based access control to restrict access to certain features or data based on user roles .</h4>
<h4>9. **Content Management**: Allow admins to manage website content such as pages, blog posts, FAQs, and banners to keep the site updated and engaging.</h4>

<h4>10. **Shipping and Tax Configuration**: Provide settings to configure shipping options, shipping rates, tax rates, and delivery zones to accurately calculate shipping costs for orders.</h4>

<h4>11. **Payment Gateway Integration**: Integrate payment gateways to securely process online payments from customers. Admins can configure payment methods and view transaction history.</h4>

<h4>12. **Security and Compliance**: Implement security measures like HTTPS, encryption, and user authentication to protect sensitive data. Ensure compliance with regulations such as GDPR or PCI DSS.</h4>

<h4>13. **Localization and Multi-language Support**: Support multiple languages and currencies to cater to a global audience. Allow admins to manage translations and localize content.</h4>

<h4>14. **Email Notifications**: Set up automated email notifications for order confirmations, shipping updates, password resets, and other important events to keep customers informed.</h4>

15. **Customization and Extensibility**: Provide options for customization and integration with third-party tools or extensions to extend the functionality of the admin panel according to specific business needs.</h4></p>
			</div>
			
            <div id='log' style={{color: '#007bff'}}>© 2017-2024 Copyright ASSASSIN UNIVERSAL STUDIOS. Terms of Use · Privacy Policy .</div>
		</div>
	);
};

export default Home;
