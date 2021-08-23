import React, { useState, useEffect} from 'react';
import '../styles/Profile.css';


function CreateProfile() {

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [leisure, setLeisure] = useState('')
    const [alert, setAlert] = useState(false)   


    useEffect(() => {
        if(alert){
            setTimeout(()=>{
                setAlert(false);
            }, 1000)
        }
    },[alert]);

    function handleSubmit(event){
        event.preventDefault()

        const postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, department, leisure })
        };
        fetch('http://localhost:3000/api/auth/profile', postData)
            .then(res => res.json())
            .then(() =>
                setName(''),
                setDepartment(''),
                setLeisure(''),
                setAlert(true)
            )
    };


    function handleChangeName(event){
        setName(event.target.value);
    };
    function handleChangeDepartment(event){
        setDepartment(event.target.value);
    };
    function handleChangeLeisure(event){
        setLeisure(event.target.value)
    };

    return (
        <div className='profile'>
            <h1>Pour compléter/modifier mon profil</h1>
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
