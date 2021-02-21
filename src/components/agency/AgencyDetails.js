import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBIcon, MDBRow, MDBTable, MDBTableBody, MDBTableHead, MDBTypography } from 'mdbreact';

import { getAgencyById } from '../../actions/agencyAction';
import Spinner from '../COMMON/Spinner';

import './Agency.css';
import SocialLinks from '../COMMON/SocialLinks';
import InfoText from '../COMMON/InfoText';


const AgencyDetails = ({ agencyDetails, getAgencyById }) => {
    const { id } = useParams();

    useEffect(() => {
        getAgencyById(id);
    }, [])

    if (!agencyDetails) {
        return <Spinner />
    }


    const { name, type, administrator, founding_year, launcher_list, successful_launches, failed_launches, total_launch_count, wiki_url, info_url, abbrev, description, country_code, logo_url } = agencyDetails;

    const renderLaunchersList = () => {
        return launcher_list.map(({ name, wiki_url, id }, index) => {

            return <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td><MDBBtn size='sm' target='_blank' href={wiki_url}>
                    <MDBIcon fab icon="wikipedia-w" />
                </MDBBtn></td>
                <td>
                    <MDBBtn color='primary' size='sm' target='_blank' href={`/launcher/${id}`}>
                        View details
                    </MDBBtn>
                </td>
            </tr>
        })
    }
    return (
        <>
            <MDBTypography tag='h3' variant="h3 h3-responsive">Agency Details</MDBTypography>
            <hr />
            <MDBRow className="mb-4" center>
                <MDBCol md="4">
                    <img src={logo_url} className="img-fluid" alt={name} />
                </MDBCol>
            </MDBRow>
            <MDBRow className="mb-4">
                <MDBCol md={12} sm={12}>
                    <MDBCard className='text-center'>

                        <MDBCardBody>
                            <MDBCardTitle className='text-center'>{name} - {abbrev}  <span style={{ fontSize: '0.7em' }}>({type})</span></MDBCardTitle>
                            <MDBCardText>
                                <MDBRow>
                                    <MDBCol size='6'>
                                        <MDBTable small responsive>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>Administrator</td>
                                                    <td>{administrator}</td>
                                                </tr>
                                                <tr>
                                                    <td>Founding Year</td>
                                                    <td>{founding_year}</td>
                                                </tr>
                                                <tr>
                                                    <td>Country(s)</td>
                                                    <td>{country_code}</td>
                                                </tr>

                                            </MDBTableBody>
                                        </MDBTable>
                                    </MDBCol>
                                    <MDBCol size='6'>
                                        <MDBTable small responsive>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>Total Launches</td>
                                                    <td>{total_launch_count}</td>
                                                </tr>
                                                <tr>
                                                    <td>Successfull Launches</td>
                                                    <td>{successful_launches}</td>
                                                </tr>
                                                <tr>
                                                    <td>Failed Launches</td>
                                                    <td>{failed_launches}</td>
                                                </tr>

                                            </MDBTableBody>
                                        </MDBTable>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardText>
                            <MDBCardText className='text-center'>
                                <h5>Social Links</h5>
                                <SocialLinks wiki={wiki_url} webLink={info_url} />
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-3'>
                <MDBCol size='12'>
                    <InfoText title='Description' text={description} />
                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-3'>
                <MDBCol size='12'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle className='text-center'>Launchers</MDBCardTitle>
                            <MDBTypography note noteColor='info' noteTitle='Definition: '>
                                Launchers or Launch Vehicles are used to carry spacecraft to space.
                            </MDBTypography>
                            <MDBTable small responsive>
                                <MDBTableHead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Wiki
                                        </th>
                                        <th></th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {renderLaunchersList()}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        agencyDetails: state.agencyDetails
    }
}

export default connect(mapStateToProps, { getAgencyById })(AgencyDetails)
