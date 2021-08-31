import React, { useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

function PostProfile() {

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [leisure, setLeisure] = useState('')
    const [alert, setAlert] = useState(false)   


    useEffect(() => {
        if(alert){
            setTimeout(()=>{
                setAlert(false);
            }, 1000)
        }
    },[alert]);

    function handleSubmit(event){
        event.preventDefault()

        const postData = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
            body: JSON.stringify({ name, department, leisure })
        };
        fetch('http://localhost:3000/api/auth/profile', postData)
            .then(res => res.json())
            .then(() =>
                setName(''),
                setDepartment(''),
                setLeisure(''),
                setAlert(true),
                window.location.reload()       
            )
    };

    function handleChangeName(event){
        setName(event.target.value);
    };
    function handleChangeDepartment(event){
        setDepartment(event.target.value);
    };
    function handleChangeLeisure(event){
        setLeisure(event.target.value)
    };

    return (
        <div>
            {alert && <p>Informations enregistrées</p>}
            
            <Container>
                <Form noValidate validated={name, department, leisure} onSubmit={handleSubmit} className='mt-4'>
                    <Row className='mb-3'>
                        <Form.Group as={Col}  controlId='name'>
                            <Form.Label>Nom et prénom </Form.Label>
                            <Form.Control  
                                required
                                type='text'
                                placeholder='Votre nom et prénom'
                                onChange={handleChangeName}
                                value={name}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId='department'>
                            <Form.Label>Votre fonction </Form.Label>
                            <Form.Control  
                                required
                                type='text'
                                placeholder='Votre fonction'
                                onChange={handleChangeDepartment}
                                value={department}>
                            </Form.Control>
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} controlId='leisure' className='mt-4'>
                            <Form.Label>Vos loisirs/Hobbies </Form.Label>
                            <Form.Control
                                as='textarea'  
                                required
                                type='text'
                                placeholder='Vos loisirs/Hobbies'
                                onChange={handleChangeLeisure}
                                style={{ height: '100px', width:'100%'}}
                                value={leisure}>
                            </Form.Control>
                    </Form.Group>

                    <Row>
                        <Col>
                            <Button className='mt-4' type='submit' title='Enregistrez' >Enregistrez</Button>
                        </Col>
                    </Row>       
                </Form>
            </Container>

        </div>
       
    )

}
export default PostProfile
