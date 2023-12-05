import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand} from 'mdb-react-ui-kit';
import logo from "../assets/logo.png"

export default function Header() {
  return (
    <div className = 'header'>
      <MDBNavbar light bgColor='light'>
        <MDBContainer >
          <MDBNavbarBrand href='#'>
            <img
              src={logo}
              height='100px'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}