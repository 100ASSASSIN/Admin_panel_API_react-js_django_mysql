import { useNavigate } from "react-router-dom";
import "../index.css";
import React, { useState, useEffect } from "react";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="title">
        <h1>Key Check</h1>
      </div>
      <div className="about-container">
        <ASSASSIN />
        <ApiData />
      </div>
    </div>
  );
};

function ASSASSIN() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/ASSASSIN/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div className="assassin-container">
      <h1>ASSASSIN</h1>
      <div id="msg">
        <h3>{message}</h3>
      </div>
    </div>
  );
}

function Check() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/check/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div className="assassin-container">
      <h1>Check</h1>
      <div id="msg">
        <h3>{message}</h3>
      </div>
    </div>
  );
}

function ApiData() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hello-world/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  function postDataToAPI(data) {
    fetch("http://127.0.0.1:8000/api/post-data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response from server:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  useEffect(() => {
    const dataToSend = { key: "value" };
    postDataToAPI(dataToSend);
  }, []);

  return (
    <div className="hello-world-container">
      <h1>API Test</h1>
      <p>{message}</p>
      <ASSASSIN />
      <Check />
      <App />
      <Ip />
    </div>
  );
}

function Ip() {
  const [ipAddress, setIpAddress] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [locationData, setLocationData] = useState([]);
  const [autoSaveMessage, setAutoSaveMessage] = useState("");

  // Fetch IP Address on mount
  useEffect(() => {
    fetch("https://api.ipecho.net/plain")
      .then((response) => response.text())
      .then((data) => {
        console.log(`User's public IP address: ${data}`);
        setIpAddress(data);
      })
      .catch((error) => console.error("Error fetching IP address:", error));
  }, []);

  // Fetch Live Location
  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLatitude(newLocation.latitude);
          setLongitude(newLocation.longitude);
          setError(null);

          // Automatically save latitude and longitude to the locationData array
          setLocationData((prevData) => {
            const newData = [...prevData, newLocation];
            downloadLocationData(newData); // Trigger download when new data is available
            return newData;
          });

          // Show auto-save message
          setAutoSaveMessage("Location data saved automatically.");

          // Clear auto-save message after a certain time
          setTimeout(() => {
            setAutoSaveMessage("");
          }, 3000); // Clear message after 3 seconds
        },
        (error) => {
          setError(error.message);
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // Download Location Data
  const downloadLocationData = (data) => {
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "location_data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="App">
      <h1>User's public IP address: {ipAddress}</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
          <p>{autoSaveMessage}</p>
          {/* <button onClick={downloadLocationData}>Download Location Data</button> */}
        </div>
      )}
    </div>
  );
}

export default About;
