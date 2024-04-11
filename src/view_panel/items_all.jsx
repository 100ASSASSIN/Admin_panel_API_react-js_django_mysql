import React, { useState, useEffect } from "react";
import './icons/tab.css'

const navigate = () => {
    window.location.replace("/assassin");
}

const Items = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/Items_li/");
        const data = await response.json();
        // Assuming your API response structure is as shown in your example
        setApiData(data.message); // Set the entire array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="font-sans">
      {apiData !== null ? (
        <div>
          {apiData.map((item) => (
            <div key={item.id} className="border border-gray-300 rounded-lg mb-4 p-4">
              <div className="flex items-center justify-between">
              <div className="flex">
                <p className="font-semibold">ID: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Filename: {item.filename}</p>
                <p>Uploaded At: {item.uploaded_at}</p>
                <img id="fd" src={`data:image/jpeg;base64,${item.image}`} alt={item.filename} style={{ maxWidth: '50%', height: '50%', marginTop: '10px' }} />
              </div>
              </div>
             
              
               <button id="ut2" type="submit" style={buttonStyle} onClick={() => navigate(-1)}>
                Go Back
            </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};


export default Items;
