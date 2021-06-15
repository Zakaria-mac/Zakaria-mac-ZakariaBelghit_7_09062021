import React from 'react';
import { useState } from 'react';
import { A } from 'hookrouter' 
import CreateAccount from './CreateAccount';
import '../styles/Signup.css'


function Connection( { userName, setUserName }, { password, setPassword }) {

    const [user_Name, setUser_Name] = useState('')
    const [user_password, setUser_Password] = useState('')
    
    function handleChange(e) {
        setUser_Name(e.target.value)
    }
    function handlePassword(e){
        setUser_Password(e.target.value)
    }

    function handleBlur() {
        if (!user_Name.includes('@')){
            alert('Attention, il faut mettre un @ pour valider l\'email')
        }
    }

    function handleSubmit(e){
        if(setUser_Name !== setUserName){
            alert('Nom d\'utilisateur non connu')
        } else if (setPassword !== setPassword){
            alert('Mot de passe non connu')
        } else {
            alert('Connexion réussie'),
            <A href='/login/messagelist'></A>
        }
    }

    return(
        <form className='form'>
            <p className='user_Name'>
                <label for='email'> Inscrivez votre email </label>
                    <input 
                        type='email'
                        value={user_Name}
                        required={true}
                        onChange={handleChange}
                        placeholder='Entrez votre email pro.'
                        onBlur={handleBlur}
                    />
            </p>
            <p className='password'>
                <label for='password'> Mettez votre mot de passe </label>
                    <input
                        type='text' 
                        value={user_password}
                        required={true}
                        onChange={handlePassword}
                        placeholder='Mot de passe'
                    />
            </p>
            <button type='submit' 
                    className="btn_signup"
                    onClick={handleSubmit}
                    >Connectez-vous
            </button>
        </form>
    
    )
}

export default Connection