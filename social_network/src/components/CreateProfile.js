import React from 'react';
import { useState } from 'react';
import '../styles/Profile.css'


function CreateProfile(){
    
    return(
        <form className='profile'>
            <label>Votre nom</label>
                <input type='text' name='nom' placeholder='Dupont' required='true'></input>
            <label>Votre prénom</label>
                <input type='text' name='prenom' placeholder='Henri' required='true'></input>
            <label>Votre poste/département</label>
                <input type='text' name='departement' placeholder='Comptabilité/finance' required='true'></input>    
            <label>Vos loisirs</label>
                <textarea></textarea>
        </form>
    )

}
export default CreateProfile