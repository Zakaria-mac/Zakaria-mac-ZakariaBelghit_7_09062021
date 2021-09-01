import React from 'react';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

function PostMessage(){

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [object, setObject] = useState('')
    const [message, setMessage] = useState('')
    const [cover, setCover] = useState('')
    const [alert, setAlert] = useState(false)  

    useEffect(() => {
        if(alert){
            setTimeout(()=>{
                setAlert(false);
            }, 1000)
        }
    },[alert])

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.currentTarget.File)

        const formData = new FormData
        formData.append('message', JSON.stringify({
            name, department, object, message
        }))
        formData.append('image', e.currentTarget.File.files[0]);


        const postMessage = {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
            body: formData,
        };  
        delete postMessage.headers['Content-Type'];
        fetch('http://localhost:3000/api/messages', postMessage)
            .then(res => res.json())
            .then(() =>
                    setName(''),
                    setDepartment(''),
                    setObject(''),
                    setMessage(''),
                    setCover(''),
                    setAlert(true)
            )
            .catch((error) => console.log(error))
    }

    function handleChangeName(event){
        setName(event.target.value);
    };
    function handleChangeDepartment(event){
        setDepartment(event.target.value);
    };
    function handleChangeOject(event){
        setObject(event.target.value);
    };
    function handleChangeMessage(event){
        setMessage(event.target.value);
    };
    function handleChangeCover(event){
        setCover(event.target.value);
    };

    return(
        <div>
        
            <h1 style={{textAlign:'center'}}className='d-flex justify-content-center mb-5 mt-3'>De quoi souhaiteriez-vous discuter ?</h1>
            {alert && <p>Message publié avec succès !</p>}

            <Container className='w-75 justify-content-center mb-5'>
                <Form onSubmit={handleSubmit} className='align-content-center'>
                    <Row> 
                        <Form.Group as={Col} controlId='name'>
                            <Form.Label>Nom et prénom </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Votre nom'
                                onChange={handleChangeName}
                                value={name}
                                required>
                            </Form.Control>
                        </Form.Group> 
                   
                        <Form.Group as={Col} controlId='department'>
                            <Form.Label>Votre fonction </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Votre fonction'
                                onChange={handleChangeDepartment}
                                value={department}
                                required>
                            </Form.Control>
                        </Form.Group> 
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId='object' className='mt-3'>
                            <Form.Label>L'objet de votre message </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="Quel est l'objet de votre message"
                                onChange={handleChangeOject}
                                value={object}
                                required
                               >
                            </Form.Control>
                        </Form.Group> 
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId='message' className='mt-3'>
                            <Form.Label>Votre message </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='De quoi souhaiteriez-vous discuter ?' 
                                onChange={handleChangeMessage} 
                                value={message}
                                required
                                style={{ height: '100px', width:'100%'}}
                                > 
                            </Form.Control>
                        </Form.Group> 
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId='name' className='mt-3'>
                            <Form.Label className='mr-4'>&#128206;</Form.Label>
                            <Form.Control
                                name='File'
                                type='file'
                                onChange={handleChangeCover}
                                value={cover}
                                >
                            </Form.Control>
                        </Form.Group> 
                    </Row>

                    <Row>
                        <Col>
                            <Button className='mt-4' type="submit">Envoyez</Button>
                        </Col>

                    </Row>
                </Form>
            </Container>                   
        </div>
      
    )
}

export default PostMessage