import React from 'react'
import { MDBBtn, MDBCard, MDBCardText, MDBCardTitle, MDBTable, MDBTableBody, MDBTableHead, MDBTooltip } from 'mdbreact'


const renderFlightLaunchStatus = (flightId, { id, abbrev }) => {
    if (id === 4) // Launch Failure
        return <MDBBtn color="danger" tag='a' href={`/launch/${flightId}`} size='sm'>
            {abbrev}
        </MDBBtn>

    if (id === 3) //Launch Success
        return <MDBBtn color="dark-green" tag='a' href={`/launch/${flightId}`} size='sm'>
            {abbrev}
        </MDBBtn>

    if (id === 7) //Launch Partial Failure
        return <MDBBtn color="warning" tag='a' href={`/launch/${flightId}`} size='sm'>
            {abbrev}
        </MDBBtn>
    return null;
}

const renderFlightsList = (flights) => {
    if (flights.length <= 0) {
        return <tr>
            <td colSpan='4'>No flight details available</td>
        </tr>
    }
    console.log(flights);
    return flights.map(({ id, name, status, mission }, index) => {
        return <tr key={id}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{mission.name} | {mission.type} | {' '}
                <MDBTooltip
                    domElement
                    tag="span"
                    placement="top"
                >
                    <span className="blue-text">{mission.orbit.abbrev}</span>
                    <span>{mission.orbit.name}</span>
                </MDBTooltip>

            </td>
            <td>
                {renderFlightLaunchStatus(id, status)}
            </td>
        </tr>
    });
}
const Flights = ({ flights }) => {
    return (
        <MDBCard className="card-body text-center">
            <MDBCardTitle>Flights</MDBCardTitle>
            <MDBCardText>
                <MDBTable small responsive>
                    <MDBTableHead>
                        <tr>
                            <th>#</th>
                            <th>Flight name</th>
                            <th>Misson (Name | Type | Orbit)</th>
                            <th>Launch Status</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {renderFlightsList(flights)}
                    </MDBTableBody>
                </MDBTable>
            </MDBCardText>
        </MDBCard>
    )
}

export default Flights
