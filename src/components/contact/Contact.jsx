import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ulb6akd",
      "template_v91asi8",
      form.current,
      "DEJ50QaKVp3-7BDr0"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jwtan@asu.edu</h5>
            <a href="mailto:jwtan@asu.edu" target="_blank" rel="noreferrer">
              Send message
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Jarrell Tan</h5>
            <a
              href="https://www.linkedin.com/in/jarrelltwe/"
              target="_blank"
              rel="noreferrer"
            >
              Connect with Me!
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="Name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="Email" placeholder="Your Email" required />
          <textarea
            name="Message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
