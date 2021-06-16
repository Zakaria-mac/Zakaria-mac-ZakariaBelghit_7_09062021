import React from 'react';
import { useState, useEffect } from 'react';
import { A } from 'hookrouter'
import Header from '../components/Header';
import Footer from '../components/Footer'
import CreateProfile from '../components/CreateProfile';

function Profile() {

    useEffect(() => {
        document.title='Groupomania - Votre profil'
    },[])

    return(
        <div>
        <Header />
        <CreateProfile />
        <Footer />

        </div>
    )
}
export default Profile