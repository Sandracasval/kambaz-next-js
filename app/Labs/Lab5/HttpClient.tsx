//the code below illustrates how to use the axios library to send an asynchronous
//request to the server and then capture the response in the user interface
//without navigating to the URL, away from the current windo

//FETCHES DATA FROM THE SERVER WITHOUT LEAVING THE PAGE
"use client";
import * as client from "./client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  //the fetchWelcomeOnClick function is tagged as an async since it uses
  //axios.get() to asynchronoysly send a request to the server and
  
  //returns the response from the server
  const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };
  //new function goes here
  //when the httpClient loads, the useEffect invokes fetchWelcomeOnLoad which retrives
  //the message from the server and sets the new welcomeOnLoad state variable 
  const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);

  return (
    <div>
      <h3>HTTP Client</h3> <hr />
      <h4>Requesting on Click</h4>
      {/**this button triggers the ajax cell */}
      <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button>{" "}
      <br />
      Response from server: <b>{welcomeOnClick}</b>
      <hr />
      <h4>Requesting on Load</h4>
      Response from server: <b>{welcomeOnLoad}</b>
      <hr />
    </div>
  );
}
