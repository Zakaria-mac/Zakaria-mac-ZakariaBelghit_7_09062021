import React from 'react';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'

function GetMessages(){

    const [messageList, setMessageList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);   

    useEffect(() => {
        const getData = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
        }
        fetch('http://localhost:3000/api/messages', getData)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true)
                    setMessageList(data.message)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, []);

    function handleSubmit(e){
        e.preventDefault();

        const modifyData = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
            body: JSON.stringify({ messageList })
        };
        fetch('http://localhost:3000/api/messages/:id', modifyData)
            .then(res => res.json())
            .then(() => 
                setMessageList(''))
    };

    function handleDelete(e){
        e.preventDefault();

        const deleteData = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
        };
        fetch('http://localhost:3000/api/messages/:id', deleteData)
            .then(() => setMessageList(''))
    };


    if(error){
        return <div>Erreur : {error.message} </div>
    } else if (!isLoaded){
        return <div> Chargement...</div>
    }else 
    return(
            <div className='messageSent'>
                <div>
                    {messageList.map(data =>(
                        <div key={data.id}>
                            {data.name} 
                            {data.department} 
                            {data.object} 
                            {data.message} 
                            <img src={data.cover} alt='Images publication'></img>


                            <button onSubmit={handleSubmit}>Modifier</button>
                            <button onSubmit={handleDelete}>Supprimer</button>  
                    </div>))}  
                </div>
            </div>        
 
    )

}

export default GetMessages