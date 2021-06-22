import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { messagelist } from '../api/datas';
import MessageList from '../components/MessageList'
import CreateMessage from '../components/CreateMessage';

function ForumSpace() {

    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [department, setDepartment] = useState(localStorage.getItem('department') || '');
    const [title, setTitle] = useState(localStorage.getItem('title') || '');
    const [message, setMessage] = useState(localStorage.getItem('message') || '');
    const [selectFile, setSelectFile] = useState(localStorage.getItem('selectFile') || '');
    const [comment, setComment] = useState(localStorage.getItem('comment') || '')
   
    useEffect(() => {
        document.title='Groupomania - Hello'
    },[])

    return(
        <div>
        <Header />
        <CreateMessage 
            name={name} setName={setName}
            department={department} setDepartment={setDepartment}
            title={title} setTitle={setTitle}
            message={message} setMessage={setMessage}
            selectFile={selectFile} setSelectFile={setSelectFile}
        />
        <MessageList 
            name={name} setName={setName}
            department={department} setDepartment={setDepartment}
            title={title} setTitle={setTitle}
            message={message} setMessage={setMessage}
            selectFile={selectFile} setSelectFile={setSelectFile}
            comment={comment} setComment={setComment}
        />
        <Footer />
        </div>
    )
}
export default ForumSpace