import React from 'react';
import { useState, useEffect } from 'react';
import { FormData } from "formdata-node"


function PostMessage(){

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [object, setObject] = useState('')
    const [message, setMessage] = useState('')
    const [cover, setCover] = useState('')
    const [alert, setAlert] = useState(false)  

    useEffect(() => {
        if(alert){
            setTimeout(()=>{
                setAlert(false);
            }, 1000)
        }
    },[alert])

    function handleSubmit(e){
        e.preventDefault()

        const formData = new FormData
        formData.append('file', `${message}`)

        const postMessage = {
                method: 'POST',
                headers: { 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
                body: formData
        };
        fetch('http://localhost:3000/api/messages', postMessage)
            .then(delete PostMessage.headers['Content-Type'])
            .then(res => res.json())
            .then(() =>
                    setName(''),
                    setDepartment(''),
                    setObject(''),
                    setMessage(''),
                    setCover(''),
                    setAlert(true)
            )
            .catch((error) => console.log(error))
    }

    function handleChangeName(event){
        setName(event.target.value);
    };
    function handleChangeDepartment(event){
        setDepartment(event.target.value);
    };
    function handleChangeOject(event){
        setObject(event.target.value);
    };
    function handleChangeMessage(event){
        setMessage(event.target.value);
    };
    function handleChangeCover(event){
        setCover(event.target.value);
    };

    return(
        <div>
        
        <h2>De quoi souhaiteriez-vous discuter ?</h2>
        {alert && <p>Message publié avec succès !</p>}

            <form onSubmit={handleSubmit}>

                    <label>Votre nom et prénom</label>
                    <input
                        type='text'
                        placeholder='Votre nom'
                        onChange={handleChangeName}
                        value={name}
                        required={true}
                        >
                    </input>

                    <label>Votre poste/département</label>
                    <input
                        type='text'
                        placeholder='Votre fonction'
                        onChange={handleChangeDepartment}
                        value={department}
                        required={true}
                        >
                    </input>

                    <label>L'object de votre message</label>
                    <input
                        type='text'
                        placeholder="Quel est l'objet de votre message"
                        onChange={handleChangeOject}
                        value={object}
                        required={true}
                        >
                    </input>

                    <label>Votre message</label>
                    <textarea 
                        type='text'
                        placeholder='De quoi souhaiteriez-vous discuter ?' 
                        onChange={handleChangeMessage} 
                        value={message}
                        required={true}
                        > 
                    </textarea>
                    
                    <input
                        type='file'
                        onChange={handleChangeCover}
                        value={cover}
                        >
                    </input>

                <button type="submit">Envoyez</button>
            </form>

        </div>
      
    )
}

export default PostMessage