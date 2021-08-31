import React from 'react';

import GetMessages from '../components/GetMessages';
import Header from '../components/Header';
import Footer from '../components/Footer'
import PostMessage from '../components/PostMessage';

function Forum(){

     
    return(
        <div>
            <header>
                <Header />
            </header>

            <section>
                <h1> Message of the forum </h1>

                <PostMessage />

                <GetMessages />
            </section>
                
            <footer>
                <Footer />
            </footer>
        </div>                
    )
}

export default Forum