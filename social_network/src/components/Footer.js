import React, { Component } from 'react';
import { useState } from 'react'
import '../styles/Footer.css'
import logo_black from '../assets/logo_black.png'

function Footer(){

    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')){
            alert('Attention, il faut mettre un @ pour valider l\'email')
        }
    }
   
    return(
        <footer className='gpm_footer'>

            <div className='gpm_footer_logo'>

                <img src={logo_black} alt='Groupomania logo' title='Groupomania logo' className='footer_logo'></img>

            </div>

            <div className='gpm_contact'>
                <p>Un problème ? Le support technique vous aide !</p> 

                <input
                    placeholder="Entrez votre email pro."
                    onChange={handleInput}
                    value={inputValue}
                    onBlur={handleBlur} />
                <button className='btn_submit' title='Cliquez pour que le support vous recontacte' onClick={() => alert(`${inputValue} a bien été envoyé au support technique`)}> Envoi </button>
                
            </div>

        </footer>

    )
}

export default Footer