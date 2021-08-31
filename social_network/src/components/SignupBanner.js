import React from 'react';
import logo_black from '../assets/icon-left-font-monochrome-black.svg'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar} from 'react-bootstrap'

function SignUpBanner() {

    return(
        <header>

            <Navbar bg="light" variant="light" expand="lg" className='mb-md-5'>
                <Container>

                    <Navbar.Brand href="/">
                        <img 
                            src={logo_black} 
                            alt="Retour à la page d'accueil"
                            title="Retour à la page d'accueil"
                            width='220'
                            height='120'
                            >
                        </img>
                    </Navbar.Brand>
                          
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/signup' title="Cliquez pour vous inscrire">Inscrivez-vous</Nav.Link>
                            <Nav.Link href='/login'  title="Cliquez pour vous connecter">Connectez-vous</Nav.Link>
                        </Nav>    
                    </Navbar.Collapse>

                </Container>    
            </Navbar>
                
        </header>  
    )
}

export default SignUpBanner