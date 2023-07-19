import React, { useRef } from "react";
import emailjs from "emailjs-com"; // Make sure to import emailjs-com instead of @emailjs/browser
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hhayb8b",
        "template_v5gs0z4",
        form.current,
        "uAzPSKzR_sCgY9GPd"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000, // Notification will be automatically closed after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message. Please try again later.", {
            position: "top-right",
            autoClose: 3000, // Notification will be automatically closed after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <div className="section">
      <h1 style={{ textAlign: "center" }}>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <ToastContainer />
      <h2 style={{ textAlign: "center" }}>
        Your message will be received via my email.
      </h2>
    </div>
  );
};

export default Contact;
