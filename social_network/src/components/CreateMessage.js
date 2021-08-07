import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { setMessageInput } from '../api/routes';
import '../styles/CreateMessage.css'

function CreateMessage({ alert, setAlert }){

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [object, setObject] = useState('')
    const [message, setMessage] = useState('')
    const [cover, setCover] = useState('')
    
    const mounted = useRef(true);

    useEffect(()=> {
        if(alert) {
            setTimeout(() => {
                if(mounted.current){
                setAlert(false)
            }
            },1000)
        }
    },[alert])

    function handleSubmit(event){
        event.preventDefault()
        setMessageInput(name, department, object, message,  cover)
        .then(() =>{
            if(mounted.current){
                setName('')
                setDepartment('')
                setObject('')
                setMessage('');
                setCover('')
                setAlert(true)
            }
        })
    }

    function handleChangeName(event){
        setName(event.target.value);
    }
    function handleChangeDepartment(event){
        setDepartment(event.target.value);
    }
    function handleChangeOject(event){
        setObject(event.target.value);
    }
    function handleChangeMessage(event){
        setMessage(event.target.value);
    }
    function handleChangeCover(event){
        setCover(event.target.value);
    }

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

export default CreateMessage