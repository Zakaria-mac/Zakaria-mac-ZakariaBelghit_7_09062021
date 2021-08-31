import React from 'react';
import SignUpBanner from '../components/SignupBanner';
import signup_page from '../assets/signup_page.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'


function Home() {

    return(
        <div>
            <header>
                <SignUpBanner />
            </header>
            
            <section>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} className='mt-5 d-flex flex-column'>
                            <h1 style={{ fontWeight:'bold', fontSize:'2.7rem', overflowWrap:'anywhere' }}> Bienvenue dans votre communauté professionnelle ! </h1>
                            
                            <p className='mt-4' >Ici, vous pourrez échanger, partager vos idées, vos suggestions, et 
                            recevoir toutes les dernières nouveautés à Groupomania. Enjoy !  &#128512;
                            </p>
                        </Col>
                        <Col xs={12} lg={6} className='mt-5'>
                            <img 
                                width='100%' 
                                src={signup_page} 
                                alt="Image de cohésion d'équipe - Groupomania" 
                                title="Image de cohésion d'équipe - Groupomania">

                            </img>
                        </Col>
                    </Row>
                </Container>       
            </section>
            
        </div>
    )
}
export default Home