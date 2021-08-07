import React, { useState, useEffect, useRef} from 'react';
import { setProfile } from '../api/routes';
import '../styles/Profile.css';


function CreateProfile({ alert, setAlert}) {

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [leisure, setLeisure] = useState('')

    const mounted = useRef(true)

    useEffect(() =>{
        if (alert){
            setTimeout(() => {
                if(mounted.current){
                    setAlert(false)
                }
            }, 1000);
        }
    }, [alert])

    function handleSubmit(event){
        event.preventDefault()
        setProfile(name, department, leisure)
        .then(() =>{
            if(mounted.current){
                setName('')
                setDepartment('')
                setLeisure('')
                setAlert(true)
            }
        })
    }

    const title = 'Pour compléter/modifier mon profil'

    function handleChangeName(event){
        setName(event.target.value);
    }
    function handleChangeDepartment(event){
        setDepartment(event.target.value);
    }
    function handleChangeLeisure(event){
        setLeisure(event.target.value)
    }

    return (
        <div className='profile'>
            <h1>{title}</h1>
            <div className='profile_orga'>
                {alert && <p>Informations enregistrées</p>}
            
                <form className='form_profile' onSubmit={handleSubmit}>
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

                    <label>Vos loisirs</label>
                    <textarea
                        placeholder='Quels sont vos loisirs favoris ?'
                        onChange={handleChangeLeisure}
                        value={leisure}
                        >

                    </textarea>
                    
                    <button type='submit'> Enregistrez </button>
                </form>

            </div>
        </div>
    )

}
export default CreateProfile
