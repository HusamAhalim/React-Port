import React from "react";
import portfolio from "../../utils/portfolio.png";
import { Typography } from "@material-ui/core";
// import { IconButton }  from "@material-ui/core";
// import {  Info, Launch, GitHub } from "@material-ui/icons";
// import InfoModal from "../InfoModal/InfoModal";

import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {}
      </Typography>
      <div className="name">
        <img src={portfolio} alt="profile_photo" className="img" />

        <h1>Sam Ahalim</h1>
       
        
        <div className="subtitle">
          <h3>I am a Full stack web developer. I give life to Code</h3>
          <h2>
          "See if you can turn dreams into a way to make a 
           living, If not an entire way of life.”
           <br></br>
                      ― Kevin Smith
          </h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;