import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';

const Header = () => {

    const [collapse, setCollapse] = useState(false);

    return (
        <div>

            <header>
                <MDBNavbar color="black" dark expand="md">
                    <MDBNavbarBrand href="/">
                        <strong>ALL ABOUT SPACE</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />
                    <MDBCollapse isOpen={collapse} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem active>
                                <MDBNavLink to="/astronauts">Astronauts</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/agencies">Agencies</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#">Pricing</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#">Opinions</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        {/* <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav> */}
                    </MDBCollapse>
                </MDBNavbar>
            </header>

        </div>
    );

}

export default Header;