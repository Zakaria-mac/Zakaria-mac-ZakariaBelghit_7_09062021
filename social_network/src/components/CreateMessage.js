import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/CreateMessage.css'

function CreateMessage({ name, setName, title, setTitle, message, setMessage, selectFile, setSelectFile }){

    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('title', title);
        localStorage.setItem('message', message);
        localStorage.setItem('selectFile', selectFile);
    })

    return(
        <div className='create_message'>
            <h1 className='title_forum' >Partagez vos messages </h1>
            <div className="orga_create">

                <form className='form_create'>
                    <label>Votre prénom </label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Votre nom'
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </input>

                    <label>L'objet de votre publication </label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Ex: orga afterwork…)'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}>
                    </input>

                    <label>Votre publication </label>
                    <textarea
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
                        type='submit'> Envoyer  
                    </button>

                </form>

            </div>

        </div>
    )
}

export default CreateMessage