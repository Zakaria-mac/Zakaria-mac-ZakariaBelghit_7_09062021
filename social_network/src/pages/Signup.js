import React from 'react';
import { useEffect } from 'react';

import CreateAccount from '../components/CreateAccount';
import SignUpBanner from '../components/SignupBanner';
import Footer from '../components/Footer';

function Signup() {

    useEffect(() => {
        document.title='Groupomania - Inscription'
    },[])

    return(
    <div>
        <SignUpBanner />

        <CreateAccount/>

        <Footer />
    </div>
)
}
export default Signup