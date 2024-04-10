import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useCookies } from 'react-cookie';
import '../Components/nav.css';

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + " ";
}

let x = 10;
let y = 20;

let g = x + y;

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
    window.location.replace("/")
  };

  return (
    <div id='panel'>
      <h3>{g}</h3>
      <h3 style={{ color: 'yellow' }}> {text} </h3>
      <h1>test</h1>
      <div id="img"></div>
      <div style={{ color: 'blue' }}><Gamer /></div>
      <div style={{ color: 'red' }}><Add /></div>
      <Application />
      <Table />
      <ApiData />
      <button onClick={handleLogout}>Logout</button> {/* Add logout button */}
    </div>
  );
}

const Add = () => {
  return (
    <h2>test22</h2>
  );
}

const Gamer = () => {
  return (
    <div style={{ color: 'green' }}> sdsadad asdsadadtest sdsdsds dsadasdadas dsadadasdasd asdsadasdsadsad dasdsad a</div>
  );
}

const Table = () => {
  return (
    <div>
      <p>Updates to your homepage feed
        We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨</p>
    </div>
  );
}

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My ASSASSIN</title>
          <link rel="shortcut icon" href="https://cdn.oaistatic.com/_next/static/media/favicon-32x32.be48395e.png" />
        </Helmet>
        ...
      </div>
    );
  }
};

export default View;
