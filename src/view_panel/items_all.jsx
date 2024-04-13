import React, { useState, useEffect } from "react";
import "./icons/tab.css";
import './frams/frams.css';
import "../Components/nav.css";

const navigate = () => {
  window.location.replace("/assassin");
};

const Game = () => {
  window.location.replace("/up");
};

const remove = () => {
  window.location.replace("/del");
};

const Items = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/Items_li/");
        const data = await response.json();
        setApiData(data.message); // Set the entire array
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div id="newr">
      {loading ? (
        <div className="loading-spinner"></div> // Display loading spinner
      ) : (
        <table className="table with-background" style={{ width: "90%" }}>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>ID</th>
              <th style={{ width: "20%" }}>Name</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "20%" }}>Filename</th>
              <th style={{ width: "20%" }}>Uploaded At</th>
              <th style={{ width: "20%" }}>IMG</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item) => (
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
                      maxWidth: "70%",
                      height: "20%",
                      marginTop: "5px",
                      borderRadius:"30px",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div id="baritems"><button onClick={() => Game(-1)} style={{ padding: '10px 90px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>+ Add items</button> <button onClick={() => remove(-1)} style={{ padding: '10px 90px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>- Remove items</button></div>
      <button
        id="ut2"
        type="submit"
        className="button-with-background"
        onClick={() => navigate(-1)} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Go Back</button>
       
      <div id='log' style={{color: '#007bff',paddingTop:'200px', paddingLeft:'250px'}}>© 2017-2024 Copyright ASSASSIN UNIVERSAL STUDIOS. Terms of Use · Privacy Policy .</div>
    </div>
  );
};

export default Items;
