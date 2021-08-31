import React from 'react';
import {A} from 'hookrouter';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

function Footer(){
   
    return(
        <footer className='fixed-bottom' style={{backgroundColor:'#f8f9fa', height:'10%'}}>
            <Container>
                <Row>
                    <Col>
                        <ul className='d-flex flex-column justify-content-start flex-md-wrap flex-md-row justify-content-md-between mt-md-4' style={{margin:'0'}}>
                            <li><A href="/termes-conditions" aria-label="liens vers A propos" style={{textDecoration:'none'}}>À propos</A></li>      
                            <li><A href="/termes-conditions" aria-label="liens vers les conditions générales d'utilisation (CGU)" style={{textDecoration:'none'}}>Conditions générales d'utilisation (CGU)</A></li>
                            <li><A href="/termes-conditions" aria-label="liens vers les mentions légales" style={{textDecoration:'none'}}>Mentions légales</A></li>
                            <li><A href="/termes-conditions" aria-label="liens vers les politiques de protections des données (RGPD)" style={{textDecoration:'none'}}>Politiques de protections des données (RGPD)</A></li>                                        
                            <li><A href="/termes-conditions" aria-label="liens vers les cookies" style={{textDecoration:'none'}}>Cookies</A></li>
                            <li><A href="/faq" aria-label="liens vers la Foire à Question" style={{textDecoration:'none'}}>FAQ</A></li>
                        </ul>          
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}

export default Footer