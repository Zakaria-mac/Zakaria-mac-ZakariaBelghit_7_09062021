import React from 'react';
import { useEffect } from 'react';
import CreateAccount from '../components/CreateAccount';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Signup() {
    useEffect(() => {
        document.title='Groupomania - Inscription'
    },[])
    return(
    <div>
        <Banner />
        <CreateAccount />
        <Footer />
    </div>
)
}
export default Signup