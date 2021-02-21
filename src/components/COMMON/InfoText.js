import React from 'react'
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact'

const InfoText = ({ title, text }) => {
    return (
        <MDBCard className="card-body text-center">
            <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>
                    {text}
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    )
}

export default InfoText
