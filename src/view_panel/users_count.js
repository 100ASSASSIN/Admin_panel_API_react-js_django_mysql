import React from "react";
import { useState, useEffect } from 'react';

const YourComponent = () => {
    const [apiData, setApiData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/Numbers/');
          const data = await response.json();
          // Assuming your API response structure is as shown in your example
          setApiData(data[0].message[0][0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array to run effect only once on mount
  
    return (
      <div>
        {apiData !== null ? (
          <p>% {apiData}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };

export default YourComponent;