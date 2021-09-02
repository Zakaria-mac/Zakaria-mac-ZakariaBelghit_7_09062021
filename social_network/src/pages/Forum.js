import React from 'react';

import GetMessages from '../components/GetMessages';
import Header from '../components/Header';
import PostMessage from '../components/PostMessage';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

function Forum({name, setName, department, setDepartment, object, setObject, message, setMessage, cover, setCover, messageList, setMessageList, isLoaded, setIsLoaded, error, setError  }){

    return(
        <div>
            <header>
                <Header />
            </header>

            <section>
                <Container className='d-flex justify-content-center'>
                    <Row>

                    <PostMessage xs={12} className=' mt-5'
                        name={name} setName={setName}
                        department={department} setDepartment={setDepartment}
                        object={object} setObject={setObject}
                        message={message} setMessage={setMessage}
                        cover={cover} setCover={setCover}
                    />

                    <h2 style={{textAlign:'center'}} className='mt-5 mb-5'> Mur des publications </h2>
                    
                    <GetMessages className='mb-5'
                        messageList={messageList} setMessageList={setMessageList}
                        isLoaded={isLoaded} setIsLoaded={setIsLoaded}
                        error={error} setError={setError}
                    />
                    </Row>
                </Container>             
            </section>
                
        </div>                
    )
}

export default Forum