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

    let text = "";
    let i = 0;
    while (i < 10) {
      text += "<br>The number is " + i;
      i++;
    }
    fetchData();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="font-sans">
      <div className="flex flex-wrap">
        {apiData !== null ? (
          apiData.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-2">
              <div className="border border-gray-300 rounded-lg p-4">
                <p className="font-semibold">ID: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Filename: {item.filename}</p>
                <p>Uploaded At: {item.uploaded_at}</p>
                <img id="fd" src={`data:image/jpeg;base64,${item.image}`} alt={item.filename} style={{ maxWidth: '40%', height: '50%', marginTop: '10px' }} />
                <text />
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button id="ut2" type="submit" style={buttonStyle} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}  

const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};


export default Items;
