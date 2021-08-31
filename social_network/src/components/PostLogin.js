import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,  Row, Col, Button, Form } from 'react-bootstrap'

function PostLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState('')
    
    useEffect(() => {
        if(alert){
            setTimeout(()=>{
                setAlert(false);
            }, 1000)
        }
    },[alert]);

    const history = useHistory()  

    function handleSubmit(e){
        e.preventDefault();

        const postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };
        fetch('http://localhost:3000/api/auth/login', postData)
            .then(res => res.json())
            .then((res) => localStorage.setItem('jwt', res.token), 
                    setEmail(''),
                    setPassword(''),
                    setAlert(true),
                    history.push('/user/profile')
              
            )
            .catch((error) => console.log(error))
    };

    function handleChangeUser(e) {
        setEmail(e.target.value)
    };
    function handleChangePassword(e){
        setPassword(e.target.value)
    };

    function handleBlur() {
        if (!email.includes('@')){
            alert('Attention, il faut mettre un @ pour valider l\'email')
        }
    };

    return(
        <div>
            <Container>
                <Form noValidate validated={email, password} onSubmit={handleSubmit} className='d-flex justify-content-center'>
                {alert && <h2> Connexion... </h2> }
                    <Row className='mt-5'>    
                        <Col xs={12} lg={6}>
                            <Form.Group as={Col}  controlId='email'>
                                <Form.Label>Indiquez votre e-mail </Form.Label>
                                <Form.Control  
                                    size='lg'
                                    required
                                    type='email'
                                    placeholder='E-mail professionnel'
                                    onChange={handleChangeUser}
                                    value={email}
                                    onBlur={handleBlur}    
                                    style={{width:'100%'}}
                                    >
                                </Form.Control>
                            </Form.Group>
                        </Col>  

                        <Col xs={12} lg={6}>
                            <Form.Group as={Col}  controlId='password' className='mt-4 mt-lg-0'>
                                <Form.Label>Votre mot de passe</Form.Label>
                                <Form.Control 
                                    size='lg'
                                    required
                                    type='password'
                                    placeholder='Mot de passe'
                                    onChange={handleChangePassword}
                                    value={password}
                                    onBlur={handleBlur}    
                                    >
                                </Form.Control>     
                            </Form.Group>
                        </Col>

                        <Button className='mt-4' type='submit' title='Connectez-vous'>Connectez-vous</Button>                           
                   
                    </Row>           
                </Form>
            </Container>          
        </div>  
    )
}

export default PostLogin