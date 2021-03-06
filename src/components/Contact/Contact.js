import React from "react";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Element } from "react-scroll";
import "./Contact.css";

export default function ContactForm() {
  const handleSubmit = e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const resetForm = () => {
      document.getElementById("contact-form").reset();
    };
    

    axios({
      method: "POST",
      url: "",
      data: {
        name: name,
        email: email,
        message: message
      } /* ,
      headers: headers */
    }).then(response => {
      console.log("response:", response);
      if (response.data.message === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        id="contact-us"
        style={{
          margin: "1rem",
          fontSize: "30px",
          textTransform: "uppercase",
          fontFamily: '"times", cursive'
        }}
      >
        <Element name="contact-me">Contact Me</Element>
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px"
        }}
      >
        <form
          onSubmit={e => handleSubmit(e)}
          className="contact-form"
          id="contact-form"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            borderRadius: "10px"
          }}
        >
          <TextField
            label="Name"
            type="text"
            margin="normal"
            variant="outlined"
            id="name"
            placeholder="Enter your name"
          />
          <TextField
            label="Email"
            type="email"
            id="email"
            margin="normal"
            variant="outlined"
            placeholder="Enter your email"
          />
          <TextField
            label="Message"
            id="message"
            multiline
            margin="normal"
            variant="outlined"
            placeholder="Enter your message"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              type="submit"
              style={{ width: "50%", marginTop: "15px" }}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
