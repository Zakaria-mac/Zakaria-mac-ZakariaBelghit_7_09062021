import React from 'react';
import { useEffect } from 'react';
import Connexion from '../components/Connexion';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function Login() {
    useEffect(() => {
        document.title='Groupomania - Connexion'
    },[])
    return(
    <div>
        <Banner />
        <Connexion />
        <Footer />
    </div>
)
}

export default Login