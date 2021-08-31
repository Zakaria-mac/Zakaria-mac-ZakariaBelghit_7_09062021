import React from 'react';
import { useEffect } from 'react';

import PostSignup  from '../components/PostSignup';
import SignUpBanner from '../components/SignupBanner';
import Footer from '../components/Footer';

function Signup() {

    useEffect(() => {
        document.title='Groupomania - Inscription'
    },[])

    return(
    <div>
        <header>
            <SignUpBanner />
        </header>
        
        <section>
            <PostSignup />
        </section>
        
        <footer>
            <Footer />
        </footer>
    </div>
)
}
export default Signup