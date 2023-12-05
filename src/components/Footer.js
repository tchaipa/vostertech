import React from 'react';
import logo from "../assets/logo.png";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput } from 'mdb-react-ui-kit';

export default function Footer() {
  return (

    <div className='footer'> 
<MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{backgroundColor: 'red'}}>
      <section className=' p-4 border-bottom'>
      <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <img
              src={logo}
              height='100'
              alt=''
              loading='lazy'
            />
              <p className='footer-text'>
              Vostertech Consultancy is a leading provider of business registration services in Zimbabwe. We have been helping businesses succeed for over 2 years, and we are committed to providing our clients with the highest level of customer service.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                Business registration

                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Tax advisory

                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Financial advisory

                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Company secretarial services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Compliance services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Business consulting

                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact 
                </a>
              </p>
            </MDBCol>

             <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='#'>
          Vostertech
        </a>
      </div>
    </MDBFooter>
    </div>

    
  );
}