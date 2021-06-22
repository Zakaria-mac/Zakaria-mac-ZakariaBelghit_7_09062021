import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/CreateMessage.css'

function CreateMessage({ name, department, title, setTitle, message, setMessage, selectFile, setSelectFile }){

    useEffect(() => {
        localStorage.setItem('title', title);
        localStorage.setItem('message', message);
        localStorage.setItem('selectFile', selectFile);
    }, [title, message, selectFile])

    return(
        <div className='create_message'>
            <h1 className='title_forum' >Bonjour {name}! Partagez vos messages </h1>
            <div className="orga_create">

                <form className='form_create'>
                    <label>L'objet de votre publication </label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Ex: orga afterwork…)'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}>
                    </input>

                    <label>Votre publication </label>
                    <textarea className='text_area'
                        name='title'
                        placeholder='Exprimez-vous ! '
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}>
                    </textarea>

                    <input
                        type='file'
                        value={selectFile}
                        onChange={(e) => setSelectFile(e.target.file[0])}
                    >
                    </input>

                    <button 
                        type='submit'
                        onClick={(e) => localStorage.getItem('title', 'message')}
                        > Envoyer  
                    </button>

                </form>

            </div>

        </div>
    )
}

export default CreateMessage