import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import image from '../assets/vlogo.png';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';
import navIcon4 from '../assets/nav-icon8.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <img
              src= {image}
              height='75'
              width= 'auto'
              alt=''
              loading='lazy'
            />
              <p className='mt-4' style={{fontFamily: 'Segoe UI', fontSize: '18px'}}>
                 We offer a free consultation so that we can understand your specific needs and provide you with the best possible advice. Contact us today to learn more about our services.
              </p>
              <div className="social-icon">
                <a href="https://facebook.com/"><img src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/"><img src={navIcon3} alt="" /></a>
                <a href="https://gmail.com/"><img src={navIcon4} alt="" /></a>
                <MDBIcon icon="home" className="me-3" />

              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{fontFamily: 'Heebo', fontSize: '18px'}}>Services</h6>
              <p>Business Consulting</p>
              <p>Business Registration</p>
              <p>Tax Advisory</p>
              <p>Financial advisory</p>
              <p>Company Secretarial Services</p>
              <p>Compliance Services</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{fontFamily: 'Heebo', fontSize: '18px'}}>Quick links</h6>
              <p>
                <a href='#!' className='text-reset'>Home</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>About Us</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Contact</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>FAQ</a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{fontFamily: 'Segoe UI', fontSize: '18px'}}>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                Three Anchor House, 54 Jason Moyo Ave, Harare, Zimbabwe
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@vostertech.co.zw
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> (+263) 778 030 376
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> (+263) 778 030 376
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className='container d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>
      </section>

      <div className='row'>
        <div className='col-lg-6'>
        <div className='text-start p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset-footer fw-bold' href='https://vostertech.co.zw/'>
          Vostertech Consultancy
        </a>
        </div>
        </div>

        <div className='col-lg-6'>
        <div className='text-end p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Proudly Powered by:
        <a className='text-reset-footer fw-bold' href='https://vostertech.co.zw/'>
          Zeus
        </a>
        </div>
        </div>
      </div>

  </div>
  </div>
      );
}