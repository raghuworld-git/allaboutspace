import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { MDBCol, MDBRow, MDBTypography } from 'mdbreact'

import { getAgencies } from '../../actions/agencyAction';
import Spinner from '../COMMON/Spinner';
import Agency from './Agency';
import Pagination from '../COMMON/Pagination';

const AgencyContainer = ({ agencies, getAgencies }) => {

    const perPage = 6;
    useEffect(() => {
        getAgencies();
    }, [])

    if (agencies.length <= 0) {
        return <Spinner />
    }

    const renderAgencies = () => {
        return agencies.data.map(({ id, name, logo_url, country_code }) => {
            return <MDBCol md="4" xs='12' key={id}><Agency name={name} imgURL={logo_url} id={id} country_code={country_code} /> </MDBCol>
        });
    }

    const handlePaginationClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;

        getAgencies(perPage, offset);
    };

    const { count } = agencies;
    return (
        <>
            <MDBTypography tag='h3' variant="h3 h3-responsive">Agencies</MDBTypography>
            <hr />
            <MDBRow className='mb-4'>
                <MDBCol>
                    <Pagination totalCount={count} perPage={perPage} handlePaginationClick={handlePaginationClick} />
                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-4'>
                {renderAgencies()}
            </MDBRow>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        agencies: state.agencies
    }
}
export default connect(mapStateToProps, { getAgencies })(AgencyContainer)
