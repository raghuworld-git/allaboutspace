import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText } from 'mdbreact';

import './Agency.css';

const Agency = ({ name, imgURL, id, country_code }) => {
    imgURL = !imgURL ? 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' : imgURL;

    return (
        <MDBCard className='agency'>
            <img className="agency__img" src={`${imgURL}`} alt={name}
            />
            <MDBCardBody className='text-center greyColor'>
                {name}
                <MDBCardText>
                    {country_code}
                </MDBCardText>
                <MDBBtn tag='a' target='_blank' href={`/agency/${id}`} outline color="primary">More</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Agency
