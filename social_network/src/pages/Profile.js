import React from 'react';
import { useState, useEffect } from 'react';
import { A } from 'hookrouter'
import Header from '../components/Header';
import Footer from '../components/Footer'
import CreateProfile from '../components/CreateProfile';

function Profile() {

    const [name, setName] = useState(localStorage.getItem('name') || '')
    const [department, setDepartment] = useState(localStorage.getItem('department') || '')

    useEffect(() => {
        document.title='Groupomania - Votre profil'
    },[])

    return(
        <div>
        <Header />
        <CreateProfile 
            name={name} setName={setName}
            department={department} setDepartment={setDepartment}/>
        <Footer />

        </div>
    )
}
export default Profile