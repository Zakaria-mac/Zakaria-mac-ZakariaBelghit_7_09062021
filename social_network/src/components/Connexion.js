import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Signup.css'
import { setLogin } from '../api/routes'


function Connexion() {

    const [userLogin, setUserLogin] = useState('')
    const [userLogPassword, setUserLogPassword] = useState('')
    
    function handleSubmit(event){
        event.preventDefault;
        setLogin(userLogin, userLogPassword)
            .then(() => {
                setUserLogin('')
                setUserLogPassword('')
            })
    }

    function handleChangeUser(e) {
        setUserLogin(e.target.value)
    }
    function handleChangePassword(e){
        setUserLogPassword(e.target.value)
    }

    function handleBlur() {
        if (!userLogin.includes('@')){
            alert('Attention, il faut mettre un @ pour valider l\'email')
        }
    }

    return(
        <form className='form' onSubmit={handleSubmit}>
            
            <p className='user_Name'>
                <label for='email'> Inscrivez votre email </label>
                    <input 
                        type='email'
                        value={userLogin}
                        required={true}
                        onChange={handleChangeUser}
                        placeholder='Entrez votre email pro.'
                        onBlur={handleBlur}
                    />
            </p>
            <p className='password'>
                <label for='password'> Mettez votre mot de passe </label>
                    <input
                        type='text' 
                        value={userLogPassword}
                        required={true}
                        onChange={handleChangePassword}
                        placeholder='Mot de passe'
                    />
            </p>
            <button type='submit' className="btn_signup">Connectez-vous</button>
        </form>
    
    )
}

export default Connexion