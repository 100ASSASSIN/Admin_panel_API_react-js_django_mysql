import React from "react";
import { useCookies } from 'react-cookie';
import '../Components/nav.css';

function Profi() {
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
    return (<div>
         <div>  
          <div id="pro"></div> <div id="name"> <button onClick={handleLogout} style={{ padding: '10px 100px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', position:'absolute', left:"0px" }}>Logout</button>{/* Add logout button */}</div>
         <div id='pro2' style={{color: '#007bff',paddingTop:'300px', paddingLeft:'250px'}}>© 2017-2024 Copyright ASSASSIN UNIVERSAL STUDIOS. Terms of Use · Privacy Policy .</div>
         </div>
    </div>
      );
    }

export default Profi;