import React from 'react';
import "./Footer.css";
import ModernLivingLogo from "../images/ModernLivingLogo650x650White.png";

const footer = () => (
  <div>
    <footer className='container-fluid footer-bg'>
      <div>
        <div className='row '>
          <div className='col-md-4'>
            <div className='footer-col-main'>
              <div className='heading-image'>
                <img src={ModernLivingLogo} className="img-fluid" alt="" />
              </div>
              <div className='content'>
                <p>Looking to refresh your home? Need ideas on home improvement and don’t know where to start? Modern Living will be your go-to website for all of your home improvement needs.</p>
              </div>
              <div className='link-call' onClick={()=> window.open("mailto:support@modernliving.com", "_self")}>Email us at <span className="email-link">info@modernliving.com</span></div>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='footer-col'>
              <div className='heading'>
              USEFUL LINKS
              </div>
              <div className='content'>
                <div className='link'>Questions</div>
                <div className='link'>Terms + Conditions</div>
                <div className='link'>Help Center</div>
                <div className='link'>Contact Us</div>
              </div>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='footer-col'>
              <div className='heading'>
                FEATURES
              </div>
              <div className='content'>
                <div className='link'>Guides</div>
                <div className='link'>Help</div>
                <div className='link'>Inspiration</div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='footer-col'>
              <div className='heading'>
                FOLLOW US
              </div>
              <div className='content'>
                <p>Follow us to stay up-to-date on the latest remodeling trends. </p>
                <div className='socialicon'>
                <i className="fab fa-facebook-f"></i>
                </div>
                <div className='socialicon'>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className='socialicon'>
                <i className="fab fa-pinterest"></i>
                </div>
                <div className='socialicon'>
                <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className='subfooter'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='footer-content'>© Copyrights 2021 <span className='font-weight-bold'>Modern Living</span> All rights reserved.</div>
        </div>
      </div>
    </div>
    <div className='subfooter' style={{ color: 'darkgrey', backgroundColor: '#2E2E2E' }}>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='footer-content'>Created by Chase Edwards, Chris Morrow, Nancy Lewis and Ashley Anness.</div>
        </div>
      </div>
    </div>
  </div>
);

export default footer;