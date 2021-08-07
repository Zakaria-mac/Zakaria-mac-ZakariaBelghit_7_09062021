import React from 'react';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer'
import CreateProfile from '../components/CreateProfile'
import PersonalInfo from'../components/PersonalInfo'

function Profile() {

    const [alert, setAlert] = useState(false)  
    const [infoProfile, setInfoProfile]= useState([])  

    useEffect(() => {
        document.title='Groupomania - Votre profil'
    },[])

    return(
        <div>
        <Header />

        <CreateProfile 
            alert={alert} setAlert={setAlert} 
        />

        <PersonalInfo 
            infoProfile={infoProfile} setInfoProfile={setInfoProfile}
            alert={alert}
        />

        <Footer />

        </div>
    )
}
export default Profile