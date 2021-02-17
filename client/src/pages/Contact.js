import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import './Contact.css'
import ContactImage from "../images/ContactMainPage.png";


class Contact extends Component {
  render() {
    return (
      <>
        <NavigationBar />

        <main className="contact-page">
          <section className="contact-head">
            <div className="contact-text-area">
              <h1 className="contact-header1">GET<span style = {{display: "block"}} className="contact-header2">IN TOUCH</span></h1>
              <p className="contact-text">Have question for us? Do you need help need finding a skilled professional? Fill out the form below and we will get back to you as soon as we can. We can't wait to help you with your home projects!</p>
            </div>
            <div className="contact-overlap-image">
              <img src={ContactImage} alt="A girl sitting on her bed waving at her laptop in her lap." />
            </div>
          </section>

          <section className="contact-body">
            <form className="contact-form">
              <input className="contact-input" type="text" name="user_name" placeholder="Name" required />
              <input className="contact-input" type="email" name="user_email" placeholder="E-mail" required />
              <textarea className="contact-input" name="message" placeholder="Message" rows={3} required />
              <button type="submit">SUBMIT</button>
            </form>
            <div className="contact-info">
              <h2>OUR OFFICE</h2>
              <p><i className="fa fa-map-marker"></i> 12345 Modern Living Dr, Cleveland, OH 44125</p>
              <p><i className="fa fa-envelope-o"></i> contact@modernliving.com</p>
              <p><i className="fa fa-phone"></i> 216.555.1234</p>
            </div>
          </section>
        </main>
      </>
    );
  }
};


export default Contact;