import React from 'react';
import { setSignup } from '../api/routes.js';
import { useState, useEffect } from 'react';
import '../styles/Signup.css';


function CreateAccount(){

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState('')

    useEffect(() => {
        if(alert){
            setTimeout(()=>{
                setAlert(false);
            }, 1000)
        }
    },[alert])

    function handleSubmit(e){
        e.preventDefault();
        setSignup(userName, password)
            .then(()=>{
                setUserName('');
                setPassword('');
                setAlert(true)
            })
    }

    function handleChangeUser(e) {
        setUserName(e.target.value)
    }

    function handleChangePassword(e){
        setPassword(e.target.value)
    }

    function handleBlur() {
        if (!userName.includes('@')){
            alert('Attention, il faut mettre un @ pour valider l\'email')
        }
    }

    return (
        <div>

            {alert && <h2> Votre compte a été créé </h2> }

            <form className='form' onSubmit={handleSubmit}>

                <p className='user_Name'>
                    <label for='email'> Inscrivez votre email </label>
                        <input 
                            type='email'
                            value={userName}
                            required={true}
                            onChange={handleChangeUser}
                            placeholder='Entrez votre email pro.'
                            onBlur={handleBlur}
                        />
                </p>
                <p className='password'>
                    <label for='password'> Créez un mot de passe </label>
                        <input
                            type='text' 
                            value={password}
                            required={true}
                            onChange={handleChangePassword}
                            placeholder='Mot de passe'
                        />
                </p>

                <button type='submit' className="btn_signup">Inscrivez-vous</button>
            </form>

        </div>
    )
}

export default CreateAccount