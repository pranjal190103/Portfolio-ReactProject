import React, { useContext, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import '../../App.css'
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode= theme.state.darkMode;
  const form = useRef();
  const [done, setDone]= useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rfm4yp9",
        "template_se3nwir",
        form.current,
        "keD1JtrzDcZlEaVhv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
        
      );
      if(Response==='ok'){
        console.log('ok');
    }
  };
  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{color:darkMode?'white':''}}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94", left:'80rem' }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="text"
            name="user-email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <button type="text" className="button s-button">Send</button>
          <span>{done && "Thanks for contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)",left:'15rem', top:'-2rem' }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
