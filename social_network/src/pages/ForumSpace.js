import React from 'react';

import GetAllMessages from '../components/Messages';
import Header from '../components/Header';
import Footer from '../components/Footer'
import CreateMessage from '../components/CreateMessage';

function ForumSpace(){

     
    return(
        <div>
            <Header />

            <div>
                <h1> Message of the forum </h1>

                <CreateMessage />

                <GetAllMessages />
                
            </div>

            <Footer />
        </div>
    )
}

export default ForumSpace