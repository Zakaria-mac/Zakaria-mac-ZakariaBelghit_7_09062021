import React from 'react'
import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'

function GetProfile(){

    const [infoProfile, setInfoProfile]= useState([]) 
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=> {
        const getData = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`},
        }
        fetch('http://localhost:3000/api/auth/profile', getData)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setInfoProfile(data.user)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                }
            )
    }, [])

    if(error) {
        return <div>Erreur: {error.message}</div>
    } else if (!isLoaded){
        return <div>Chargement...</div>;
    } else{
        return(
            <div>
                <Container>
                    <Row className='mt-5' >
                    <div>
                        {[infoProfile].map(data => 
                            <div key={data}>
                                
                                <p style={{textAlign:'center'}}>"Hello l'équipe ! Si vous ne me connaissez pas, ce petit texte de présentation pourra vous en dire plus sur mon travail, mes envies, mes passions.
                                Je m'appelle {data.name} et suis au service {data.department}. J'aime beaucoup {data.leisure} et je serais heureux·se de vous en parler davantage lors d'un afterwork ou en séminaire ! &#128512;"</p>

                            </div> 
                        )}
                    </div>
                    </Row>
                </Container>
                
            </div> 
            )   
        }
                        
    }
export default GetProfile