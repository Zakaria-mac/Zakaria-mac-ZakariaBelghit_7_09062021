import React from 'react';
import { useEffect } from 'react';

import Connexion from '../components/Connexion';
import SignUpBanner from '../components/SignupBanner';
import Footer from '../components/Footer';


function Login() {
    useEffect(() => {
        document.title='Groupomania - Connexion'
    },[])
    
    return(
    <div>
        <SignUpBanner />

        <Connexion />

        <Footer />
    </div>
)
}

export default Login