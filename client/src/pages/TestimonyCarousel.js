import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselSettings from "../utils/CarouselSettings";
import '../index.css';

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  render() {
    
    return (
    <section className='container-fluid  wraper-testimony' >
      <div className='row m-10-hor'>
        <div className='testimony'>
          <Slider {...CarouselSettings}>

            <CustomSlide className='itm' index={1}>
              <div className='blockquote'>
                {/* <div className="fa"></div> */}
                <div className="conesti">
                  <p>
                  Modern Living is the best. You can find everything you need to remodel your house. Great All-In-One website. 
                  I wouldn't use any other site around 
                  for my home improvement needs.
                  </p>
                  <div className="bytesti">
                  Jonathon, Certified User
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
              <div className='blockquote'>
                {/* <div className="fa"></div> */}
                <div className="conesti">
                  <p>
                  Modern Living is the best. 
                  I wouldn't use any other site around 
                  for my home improvement needs. 
                  </p>
                  <div className="bytesti">
                    Nancy, Certified User
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className='blockquote'>
                {/* <div className="fa"></div> */}
                <div className="conesti">
                  <p>
                  Modern Living is the best. 
                  I wouldn't use any other site around 
                  for my home improvement needs. 
                  </p>
                  <div className="bytesti">
                    Chris, Certified User
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className='blockquote'>
                {/* <div className="fa"></div> */}
                <div className="conesti">
                  <p>
                  Modern Living is the best. 
                  I wouldn't use any other site around 
                  for my home improvement needs. 
                  </p>
                  <div className="bytesti">
                    Chase, Certified User
                  </div>
                </div>
              </div>
            </CustomSlide>

          </Slider>
        </div>
      </div>
    </section>
    );
  }
}