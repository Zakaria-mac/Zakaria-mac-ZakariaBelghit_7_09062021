import React from 'react';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'

function GetMessages(){

    const [messageList, setMessageList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);   

    useEffect(() => {
        const getData = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
        }
        fetch('http://localhost:3000/api/messages', getData)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true)
                    setMessageList(data.message)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, []);

    function handleModify(e){
        e.preventDefault();

        const modifyData = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
            body: JSON.stringify({ messageList })
        };
        fetch('http://localhost:3000/api/messages/:id', modifyData)
            .then(res => res.json())
            .then(() => 
                setMessageList(''))
    };

    function handleDelete(id){
        
        const deleteData = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
        };
        fetch(`http://localhost:3000/api/messages/${id}`, deleteData)
            .then(() => document.location.reload())
    };


    if(error){
        return <div>Erreur : {error.message} </div>
    } else if (!isLoaded){
        return <div> Chargement...</div>
    }else 
    return(
            <div className='messageSent'>
                <Container>
                    <Row>
                        <Col className='d-flex justify-content-center'>                    
                            <div className='card-deck w-75'>
                            {messageList.map(data =>(
                                <div key={data.id}>
                                    <Card className='mt-5'> 
                                        <Card.Header as='h4'>
                                            {data.name} de l'équipe {data.department}
                                        </Card.Header>
                                        <Card.Body>
                                            
                                        <Card.Title>
                                            {data.object} 
                                        </Card.Title>
                                        <Card.Text className='mt-3'>
                                            {data.message} 
                                        </Card.Text>
                                        <Card.Img className='mt-3' variant='bottom' src={data.cover} alt='Images publication'></Card.Img>
                                        <Button className='mt-3 btn-sm' onClick={() => handleModify(data.id)}> Modifier </Button>
                                        <Button variant='danger btn-sm' className='mt-3 d-flex' onClick={() => handleDelete(data.id)}>Supprimer</Button>    
                                        </Card.Body>
                                    </Card>
                                </div>))}
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>        
 
    )

}

export default GetMessages