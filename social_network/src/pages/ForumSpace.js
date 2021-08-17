import React from 'react';
import { useState, useEffect } from 'react';

import GetAllMessages from '../components/Messages'
import Header from '../components/Header';
import Footer from '../components/Footer'
import CreateMessage from '../components/CreateMessage';

function ForumSpace(){
    console.log('test refresh')
    const [messageList, setMessageList] = useState([]) 
    const [alert, setAlert] = useState(false)    

    return(
        <div>
            <Header />

            <div>
                <h1> Message of the forum </h1>

                <CreateMessage 
                    alert={alert} setAlert={setAlert} 
                />

                <GetAllMessages 
                    messageList={messageList} setMessageList={setMessageList}
                    alert={alert} setAlert={setAlert}
                />
                
            </div>

            <Footer />
        </div>
    )
}

export default ForumSpace