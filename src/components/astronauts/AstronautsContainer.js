import React, { useEffect } from 'react';
import { getAstronauts } from '../../actions/astronautAction';

import Spinner from '../COMMON/Spinner';
import Astronaut from './Astronaut';
import Pagination from '../COMMON/Pagination';

import { connect } from 'react-redux';
import { MDBCol, MDBRow, MDBTypography } from 'mdbreact';

import './Astronaut.css';


const AstronautsContainer = ({ astronauts, getAstronauts }) => {


    useEffect(() => {
        getAstronauts();
    }, []);

    const perPage = 6;

    const renderAstronauts = () => {
        return astronauts.data.map(({ id, name, agency, profile_image }) => {
            return <MDBCol md="4" xs='12' key={id}><Astronaut name={name} agency={agency?.name} thumbnail={profile_image} id={id} /> </MDBCol>
        });
    }


    const { count } = astronauts;

    const handlePaginationClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;

        getAstronauts(perPage, offset);
    };

    if (astronauts.length <= 0) {
        return <Spinner />
    }
    return (
        <>
            <MDBTypography tag='h3' variant="h3 h3-responsive">Astronauts</MDBTypography>
            <hr />
            <MDBRow className='mb-4'>
                <MDBCol>
                    <Pagination totalCount={count} perPage={perPage} handlePaginationClick={handlePaginationClick} />
                </MDBCol>
            </MDBRow>

            <MDBRow className='mb-4'>
                {renderAstronauts()}
            </MDBRow>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        astronauts: state.astronauts
    }
}

export default connect(mapStateToProps, { getAstronauts })(AstronautsContainer)
