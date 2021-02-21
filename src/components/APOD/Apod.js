import React from 'react';

import { MDBRow, MDBCol, MDBView } from 'mdbreact';

import './Apod.css';

const Apod = () => {
    return (
        <div className='apod'>
            <MDBRow>
                <MDBCol size='8' className="mb-3">
                    <MDBView waves>
                        <img src="https://apod.nasa.gov/apod/image/2102/MeteorStreak_Kuszaj_5341.jpg" className="img-fluid" alt="" />
                    </MDBView>
                </MDBCol>
                <MDBCol>fsdfsdfdsfd</MDBCol>
            </MDBRow>
        </div>
    )
}

export default Apod
