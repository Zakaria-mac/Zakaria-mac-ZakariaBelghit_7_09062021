import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/MessageList.css'
import likeBtn from '../assets/like.png'
import dislikeBtn from '../assets/dislike.png'

function GetAllMessages(){

    const [messageList, setMessageList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);   
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/api/messages')
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMessageList(data.messageList)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    function handleSubmit(e){
        e.preventDefault();

        const modifyData = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
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
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('http://localhost:3000/api/messages/:id', deleteData)
            .then(() => setMessageList(''))
    };

    function handleLike(e){
        e.preventDefault();

        const likeData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ like })
        };
        fetch('http://localhost:3000/api/messages/:id/like', likeData)
            .then(res => res.json())
            .then(() => setLike(1))
    };

    function handleDisLike(e){
        e.preventDefault();

        const disLikeData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ disLike })
        };
        fetch('http://localhost:3000/api/messages/:id/dislike', disLikeData)
            .then(res => res.json())
            .then(() => setDisLike(1))
    };

    if(error){
        return <div>Erreur : {error.message} </div>
    } else if (!isLoaded){
        return <div> Chargement...</div>
    }else 
    return(
            <div className='messageSent'>
                <div>
                    {messageList.map(data =>
                        <div key={data.id}>
                            {data.name} 
                            {data.department} 
                            {data.object} 
                            {data.message} 
                            <img src={data.cover} alt='Images publication'></img>

                            <img src={likeBtn} onSubmit={handleLike} alt='Bouton pour aimer le message' title='Cliquez si vous aimez le message'></img>
                            <img src={dislikeBtn} onSubmit={handleDisLike} alt='Bouton pour ne pas aimer le message' title="Cliquez si vous n'aimez pas le message"></img>

                            <button onSubmit={handleSubmit}>Modifier</button>
                            <button onSubmit={handleDelete}>Supprimer</button>  
                    </div>)}  
                </div>
            </div>        
 
    )

}

export default GetAllMessages