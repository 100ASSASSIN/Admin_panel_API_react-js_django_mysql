import React, { useState, useEffect } from "react";

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
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {apiData !== null ? (
        <div>
          {apiData.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', padding: '10px' }}>
              <p style={{ fontWeight: 'bold' }}>ID: {item.id}</p>
              <p>Name: {item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Filename: {item.filename}</p>
              <p>Uploaded At: {item.uploaded_at}</p>
              <img src={`data:image/jpeg;base64,${item.image}`} alt={item.filename} style={{ maxWidth: '10%', height: '10%', marginTop: '10px' }} />
              {/* Assuming the image is in JPEG format */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Items;
