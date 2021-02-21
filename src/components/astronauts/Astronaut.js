import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText } from 'mdbreact';

import './Astronaut.css';

const Astronaut = ({ name, agency, thumbnail, id }) => {
    return (
        <MDBCard className='astronaut'>
            <img className="astronaut__img" src={`${thumbnail}`} alt={name}
            />
            <MDBCardBody className='text-center greyColor'>
                {name}
                <MDBCardText>
                    {agency}
                </MDBCardText>
                <MDBBtn tag='a' target='_blank' href={`/astronaut/${id}`} outline color="primary">More</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Astronaut
