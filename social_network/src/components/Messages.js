import React from 'react';
import { useEffect, useRef } from 'react';
import { getMessages } from '../api/routes';
import '../styles/MessageList.css'

function GetAllMessages({ messageList, setMessageList, alert }){

    const mounted = useRef(true)

    useEffect(() =>{
        mounted.current = true
        if(messageList.length && !alert){
            return;
        }
        getMessages()
            .then(data => {
                if(mounted.current){
                    setMessageList(data)
                }
            })
        return() => mounted.current = false 
    }, [alert, messageList])
    
// map data from profile
    return(
    
            <div className='messageSent'>
            {messageList.map(data =>
                <div key={data.id}>
                    {data.name} 
                    {data.department} 
                    {data.object} 
                    {data.message} 
                    <img src={data.cover}></img>
                    
                    <button type='submit'>Modifier</button>
                    <button type='submit'>Supprimer</button>  
                </div>)}  

                
            </div>        
 
    )


}

export default GetAllMessages