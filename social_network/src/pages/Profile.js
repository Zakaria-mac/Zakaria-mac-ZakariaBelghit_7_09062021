import React from 'react';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer'
import CreateProfile from '../components/CreateProfile'
import PersonalInfo from'../components/PersonalInfo'

function Profile() {

    useEffect(() => {
        document.title='Groupomania - Votre profil'
    },[])

    return(
        <div>
            
        <Header />

        <CreateProfile />

        <PersonalInfo />

        <Footer />

        </div>
    )
}
export default Profile