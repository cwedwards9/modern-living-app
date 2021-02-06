import React, { Component } from 'react';
import './Contact.css'
import { NavigationBar } from '../components/NavigationBar';
import Button from 'react-bootstrap/Button';
import ContactImage from "../images/ContactMainPage.png";


class Contact extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <section id="contact-main">
          <div className="row" >
            <div className="col-lg-7" style={{ backgroundColor: '#626366' }}>
              <div className="contact-text-area">
                <span className="contact-header1" style={{ color: 'white' }}>GET</span><br></br>
                <span className="contact-header2" style={{ color: 'white' }}> IN TOUCH</span>
                <p className="contact-text">Have question for us? Do you need help need finding a skilled professional? Fill out the form below and we will get back to you as soon as we can. We can't wait to help you with your home projects!</p>
              </div>
            </div>
            <div className="col-lg-5 contact-image-section d-flex" >
              <div className="contact-image contact-overlap-image">
                <img src={ContactImage} className="img-fluid" alt="Modern kitchen  " />
              </div>
            </div>
          </div>
        </section>

        <section className='container-fluid contact-form-section'>
          <div className='row'>
            <div className='col-md-7'>
              <div className="form-side">
                <form className="formcontact" >
                  <div className="contact-input"><input className="contact-input" type="text" name="user_name" placeholder="Name" required /></div>
                  <div className="contact-input"><input className="contact-input" type="email" name="user_email" placeholder="E-mail" required /></div>
                  <div><textarea className="contact-input" name="message" placeholder="Message" required /></div>
                  <Button type="submit">SUBMIT</Button>
                </form>
              </div>
            </div>
            <div className='col-md-3'>
              <div className="text-side">
                <div className='address'>
                  <div className='contact-header2' style={{ color: "#626366" }}>OUR OFFICE</div>
                  <div className='contact-list'>
                    <i className="fa fa-map-marker"></i>
                  12345 Modern Living Dr.
                  Cleveland, OH 44125
                </div>
                  <div className='contact-list'>
                    <i className="fa fa-envelope-o"></i>
                    <a href='mailto:contact@modernliving.com' target='_blank' rel='noopener noreferrer' style={{ color: "#626366" }}>
                      contact@modernliving.com
                  </a>
                  </div>
                  <div className='contact-list'>
                    <i className="fa fa-phone"></i>
                  216.555.1234
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    );
  }
};
export default Contact;