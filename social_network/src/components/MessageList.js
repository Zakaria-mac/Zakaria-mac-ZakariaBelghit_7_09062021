import React from 'react';
import { useState, useEffect } from 'react';
import { messagelist } from '../api/datas';
import MockDataMessage from './MockMessageData';
import '../styles/MessageList.css'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'

function MessageList({name, department, title, message, selectFile, comment, setComment}){

    useEffect(() => {
        localStorage.setItem('comment', comment)
    }, [comment])

    return(
        <div className='page_bloc'> 
            <div className='message_presentation'>
                <h2 className='title_front_page'>{name} de l'équipe {department}</h2>

                <div className='message_bloc'>
                    <h3 className='title_message_list'>{title}</h3>
                    <p className='message'>{message}</p>
                
                    <div className='buttons'>
                        <img src={like} alt='Bouton like' title='Bouton like' className='like_button'></img>
                        <img src={dislike} alt='Bouton dislike' title='Bouton dislike' className='dislike_button'></img>
                    </div>

                    <form className='form_messagelist'>
                        <textarea className='text_area'
                            name='comment'
                            placeholder='Commentez...)'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        >
                        </textarea>
                        <button type='submit' className='comment_button' onClick={(e) => e.preventDefault}>Commentez</button>
                    </form>

                    <div>{comment}</div>
                </div>
            </div>

            <ul className='list'>
                {messagelist.map(({id, name, object, message, like, dislike}) => (
                    <div key={id} className='message_list_forum'>
                        <MockDataMessage 
                            id={id}
                            name={name}
                            object={object}
                            message={message}      
                            like={like}
                            dislike={dislike}                  
                        />
                        
                    </div>
                ))}
            </ul>
            <div className='buttons'>
                        <img src={like} alt='Bouton like' title='Bouton like' className='like_button'></img>
                        <img src={dislike} alt='Bouton dislike' title='Bouton dislike' className='dislike_button'></img>
            </div>

        </div>
        
    )
}

export default MessageList