import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAstronautById } from '../../actions/astronautAction';
import Spinner from '../COMMON/Spinner';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow, MDBTable, MDBTableBody, MDBTypography } from 'mdbreact';

import './Astronaut.css';
import SocialLinks from '../COMMON/SocialLinks';
import InfoText from '../COMMON/InfoText';
import Flights from '../COMMON/Flights';

const AstronautDetails = ({ astronautDetails, getAstronautById }) => {

    const { id } = useParams();
    useEffect(() => {
        getAstronautById(id);
    }, [])


    if (!astronautDetails) {
        return <Spinner />
    }

    const { name, status, agency, date_of_birth, date_of_death, nationality, bio, profile_image, first_flight, last_flight, twitter, instagram, wiki, flights } = astronautDetails;


    return (
        <>
            <MDBRow>
                <MDBCol className='text-center'> <MDBTypography tag='h3' variant="h3">Astronaut Details</MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-3'>
                <MDBCol md={4} sm={12}><img src={profile_image} className='astronaut__details__img img-fluid rounded' alt={name} /></MDBCol>
                <MDBCol md={8} sm={12}>
                    <MDBCard className='astronaut__details__card'>
                        <MDBCardBody>
                            <MDBCardTitle className='text-center'>{name}  <span className={status.name === 'Active' ? 'successColor' : 'dangerColor'} style={{ fontSize: '0.7em' }}>{status.name}</span></MDBCardTitle>
                            <MDBCardText className='text-center'>
                                {agency ? <MDBBtn outline color='primary' target='_blank' href={`/agency/${agency?.id}`}>Agency: {agency?.name} ({agency?.type})</MDBBtn>
                                    :
                                    <MDBBtn outline color='primary'>Agency: Agency details not available</MDBBtn>
                                }
                            </MDBCardText>
                            <MDBCardText>
                                <MDBRow>
                                    <MDBCol size='6'>
                                        <MDBTable small>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>Nationality</td>
                                                    <td>{nationality}</td>
                                                </tr>
                                                <tr>
                                                    <td>Date of Birth</td>
                                                    <td>{date_of_birth}</td>
                                                </tr>
                                                {date_of_death &&
                                                    <tr>
                                                        <td>Date of death</td>
                                                        <td>{date_of_death}</td>
                                                    </tr>
                                                }
                                            </MDBTableBody>
                                        </MDBTable>
                                    </MDBCol>
                                    <MDBCol size='6'>
                                        <MDBTable small >

                                            <MDBTableBody>
                                                <tr>
                                                    <td>First Flight</td>
                                                    <td>{first_flight}</td>
                                                </tr>
                                                <tr>
                                                    <td>Last Flight</td>
                                                    <td> {last_flight}</td>
                                                </tr>

                                            </MDBTableBody>
                                        </MDBTable>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardText>
                            <MDBCardText className='text-center'>
                                <h5>Social Links</h5>
                                <SocialLinks twitter={twitter} insta={instagram} wiki={wiki} />
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-3'>
                <MDBCol size='12'>
                    <InfoText title='Biography' text={bio} />
                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-3'>
                <MDBCol size='12' md='12' sm='12'>
                    <Flights flights={flights} />
                </MDBCol>
            </MDBRow>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        astronautDetails: state.astronautDetails
    }
}
export default connect(mapStateToProps, { getAstronautById })(AstronautDetails)
