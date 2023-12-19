import React from 'react';
import aboutus from "../assets/aboutus1.png";

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function AboutUs() {
  return (
<div className = 'aboutus'>
<div className="container-fluid">
        <div className="row">

            <div className="col-md-12 col-lg-6 p-4">
                <div className="mbr-figure fluid">
                    <img 
                    src={aboutus}
                    alt='AboutUs'
                    box-sizing= 'border-box'
                    vertical-align= 'bottom'
                    
                    />
                </div>
            </div>

        
            <div className="col-md-12 col-lg-6 py-5 m-auto">
            <div className= 'aboutus-text'>
                <div className="media-content">
                    <p>ABOUT US</p>
                    <h3 className="mbr-section-subtitle mbr-semibold align-left mbr-black mbr-light pb-3 mbr-fonts-style display-5">We Build New Future With Best Techology</h3>
                    <div className="mbr-section-text mbr-black pb-3 ">
                        <span className="mbr-text align-left mbr-fonts-style display-7">Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Nulla eget lectus eu ex ornare porta euismod a
                            libero. Phasellus vehicula placerat enim at egestas. Aliquam suscipit felis in massa
                            hendrerit tristique. In augue diam, pellentesque nec pulvinar in, sagittis ac nulla. Sed eu
                            lectus vitae justo vehicula viverra. Aenean vel urna vitae massa consequat blandit. Quisque
                            sodales sapien vitae malesuada ultricies. Curabitur pretium ipsum non nunc facilisis semper.
                        </span>

                        <div>
                        <ul>
                            <li>Business registration</li>
                            <li>Tax advisory</li>
                        </ul> 
                        <br/>
                        <ul>
                            <li>Financial advisory</li>
                            <li>Company secretarial services</li>
                        </ul>
                        <br/>
                        <ul>
                            <li>Compliance services</li>
                            <li>Business consulting</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    
  );
}