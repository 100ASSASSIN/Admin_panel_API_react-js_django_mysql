import React, { useState, useEffect } from "react";
import "./icons/tab.css";

const navigate = () => {
  window.location.replace("/assassin");
};

const Items = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/Items_li/");
        const data = await response.json();
        setApiData(data.message); // Set the entire array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div id="newr">
      <table className="table with-background increased-width">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Filename</th>
            <th>Uploaded At</th>
            <th>IMG</th>
          </tr>
        </thead>
        <tbody>
          {apiData !== null ? (
            apiData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.filename}</td>
                <td>{item.uploaded_at}</td>
                <td>
                  <img
                    src={`data:image/jpeg;base64,${item.image}`}
                    alt={item.filename}
                    style={{
                      padding: '20px',
                      maxWidth: "17%",
                      height: "20%",
                      marginTop: "5px",
                    }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      <button
        id="ut2"
        type="submit"
        className="button-with-background"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default Items;
