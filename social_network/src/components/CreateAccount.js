import React from 'react';
import { useState } from 'react';
import {A} from 'hookrouter';
import '../styles/Signup.css';
import icon from '../assets/icon.png'


function CreateAccount(){
    
    const [userName, setUserName]=useState('')
    const [password, setPassword]=useState('')

    function handleChange(e) {
        setUserName(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleBlur() {
        if (!userName.includes('@')){
            alert('Attention, il faut mettre un @ pour valider l\'email')
        }
    }

    function handleSubmit(){
        <A href='/login/profile'></A>
    }

    return (
        <form className='form'>
            <p className='user_Name'>
                <label for='email'> Inscrivez votre email </label>
                    <input 
                        type='email'
                        value={userName}
                        required={true}
                        onChange={handleChange}
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
                        onChange={handlePassword}
                        placeholder='Mot de passe'
                    />
            </p>
            <button type='submit' 
                    className="btn_signup"
                    onClick={handleSubmit}
                    >Inscrivez-vous</button>
        </form>
    )
}

export default CreateAccount