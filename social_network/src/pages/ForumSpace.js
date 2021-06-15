import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ForumSpace() {
   
    useEffect(() => {
        document.title='Groupomania - Hello'
    },[])

    return(
        <div>
        <Header />
        
        <Footer />
        </div>
    )
}
export default ForumSpace