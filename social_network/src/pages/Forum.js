import React from 'react';

import GetMessages from '../components/GetMessages';
import Header from '../components/Header';
import Footer from '../components/Footer'
import PostMessage from '../components/PostMessage';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

function Forum(){

     
    return(
        <div>
            <header>
                <Header />
            </header>

            <section>
                <Container>
                    <Row>

                    <PostMessage/>

                    <h2 style={{textAlign:'center'}}className='d-flex justify-content-center mt-5'> Mur des publications </h2>
                    
                    <GetMessages />
                    </Row>
                </Container>             
            </section>
                
        </div>                
    )
}

export default Forum