import React from 'react';
import { useEffect } from 'react';

import Connexion from '../components/PostLogin';
import SignUpBanner from '../components/SignupBanner';
import Footer from '../components/Footer';
import PostLogin from '../components/PostLogin';


function Login() {
    useEffect(() => {
        document.title='Groupomania - Connexion'
    },[])
    
    return(
    <div>
        <header>
            <SignUpBanner />
        </header>

        <section>
            <PostLogin />
        </section>
        
        <footer>
            <Footer />
        </footer>    
    </div>
)
}

export default Login