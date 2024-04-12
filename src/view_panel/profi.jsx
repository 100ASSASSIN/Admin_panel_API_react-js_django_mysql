import React from "react";
import { useCookies } from 'react-cookie';
import '../Components/nav.css';

const navigate = () => {
  window.location.replace("/assassin");
}

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
         <button id="ut2" type="submit" style={buttonStyle1} onClick={() => navigate(-1)}>
          Go Back
          </button>
          <div id="in"> The Instructions tab inherits instructions configured on the format assigned to the profile, eliminating the need to provide instructions for each profile. Some profiles, however, do require extra instruction. Add the instructions as paragraphs of text, attached files, URLs, or links to files in document repositories</div>
    </div>
      );
    }
    const buttonStyle1 = {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
  };


export default Profi;