import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { messagelist } from '../api/datas';
import MessageList from '../components/MessageList'
import CreateMessage from '../components/CreateMessage';

function ForumSpace() {

    const [name, setName] = useState([]);
    const [title, setTitle] = useState([]);
    const [message, setMessage] = useState([]);
    const [selectFile, setSelectFile] = useState([null])
   
    useEffect(() => {
        document.title='Groupomania - Hello'
    },[])

    return(
        <div>
        <Header />
        <CreateMessage 
            name={name} setName={setName}
            title={title} setTitle={setTitle}
            message={message} setMessage={setMessage}
            selectFile={selectFile} setSelectFile={setSelectFile}
        />
        <Footer />
        </div>
    )
}
export default ForumSpace