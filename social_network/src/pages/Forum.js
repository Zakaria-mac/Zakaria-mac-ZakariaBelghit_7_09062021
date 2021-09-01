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
                <Container className='d-flex justify-content-center'>
                    <Row>

                    <PostMessage xs={12} className=' mt-5'/>

                    <h2 style={{textAlign:'center'}} className='mt-5 mb-5'> Mur des publications </h2>
                    
                    <GetMessages className='mb-5'/>
                    </Row>
                </Container>             
            </section>
                
        </div>                
    )
}

export default Forum