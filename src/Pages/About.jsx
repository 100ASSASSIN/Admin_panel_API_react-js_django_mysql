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
      <div id='log' style={{color: '#007bff'}}>© 2017-2024 Copyright ASSASSIN UNIVERSAL STUDIOS. Terms of Use · Privacy Policy .</div>
    </div>
  );
  }

export default About;
