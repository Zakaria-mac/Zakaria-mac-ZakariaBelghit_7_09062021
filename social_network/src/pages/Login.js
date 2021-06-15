import React from 'react';
import { useEffect } from 'react';
import Connection from '../components/Connection';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function Login() {
    useEffect(() => {
        document.title='Groupomania - Connexion'
    },[])
    return(
    <div>
        <Banner />
        <Connection />
        <Footer />
    </div>
)
}

export default Login