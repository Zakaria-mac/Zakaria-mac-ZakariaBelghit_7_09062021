import React from 'react';
import { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer'
import PostProfile from '../components/PostProfile'
import GetProfile from '../components/GetProfile';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

function Profile() {

    useEffect(() => {
        document.title='Groupomania - Votre profil'
    },[])

    return(
        <div>
            <header>
                <Header />
            </header>
            
            <section>
                <Container>
                    <Row className='mt-4'>
                        <h1 style={{textAlign:'center'}}className='d-flex justify-content-center'>Dites-nous en davantage sur vous ! &#128512;</h1>
                        <Col xs={12} lg={6}>
                            <PostProfile />
                        </Col>
                        <Col xs={12} lg={6}>
                           <GetProfile />
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default Profile