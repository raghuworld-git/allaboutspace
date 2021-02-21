import { MDBBtn, MDBIcon } from 'mdbreact';
import React from 'react';


const SocialLinks = ({ twitter = null, insta = null, wiki = null, webLink = null }) => {
    return (
        <div className='d-flex flex-row justify-content-center'>
            {wiki &&
                <MDBBtn color="black" tag='a' href={wiki} target='_blank'>
                    <MDBIcon fab icon="wikipedia-w" size="lg" />
                </MDBBtn>
            }
            {twitter &&
                <MDBBtn color="primary" tag='a' href={twitter} target='_blank'>
                    <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>
            }
            {insta &&
                <MDBBtn className='purple-gradient' tag='a' href={insta} target='_blank'>
                    <MDBIcon fab icon="instagram" size="lg" />
                </MDBBtn>
            }
            {webLink &&
                <MDBBtn tag='a' href={webLink} target='_blank'>
                    <MDBIcon icon="link" size="lg" />
                </MDBBtn>
            }
            {wiki === null && twitter === null && insta === null && webLink === null ? 'No social accounts. Please stay tuned' : ''}
        </div>
    )
}

export default SocialLinks
