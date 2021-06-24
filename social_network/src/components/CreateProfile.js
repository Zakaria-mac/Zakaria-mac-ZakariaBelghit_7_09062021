import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';


function CreateProfile({ name, setName, department, setDepartment}) {

    const [leisure, setLeisure] = useState(localStorage.getItem('leisure') || '')

    useEffect(() =>{
        localStorage.setItem('name', name);
        localStorage.setItem('department', department);
        localStorage.setItem('leisure', leisure);
    }, [name, department, leisure]);

    const title = 'Pour compléter/modifier mon profil'
    const subtitle = 'Ma présentation...'

    return (
        <div className='profile'>
            <h1>{title}</h1>
            <div className='profile_orga'>
            
                <form className='form_profile'>
                    <label>Votre nom et prénom</label>
                    <input
                        type='text'
                        name='nom'
                        placeholder='Dupont'
                        required='true'
                        value={name}
                        onChange={(e) => setName(e.target.value)}></input>

                    <label>Votre poste/département</label>
                    <input
                        type='text'
                        name='departement'
                        placeholder='Comptabilité/finance'
                        required='true'
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}></input>

                    <label>Vos loisirs</label>
                    <textarea
                        value={leisure}
                        onChange={(e) => setLeisure(e.target.value)}></textarea>
                    
                    <button type='submit' onClick={(e) => { e.preventDefault}}> Enregistrez </button>
                </form>

                <div className='presentation'>
                    <h2>{subtitle}</h2>
                    <p className='text_presentation'> "Hello l'équipe ! Si vous ne me connaissez pas, ce petit texte de présentation pourra vous en dire plus sur mon travail, mes envies, mes passions.
                        Je m'appelle {name} et je fais partit du service de {department}. Je suis passionné·e par {leisure} et serais heureux·se de vous en parler davantage lors d'un afterwork ou séminaire ! &#128512;"
                    </p>
                </div>
            </div>
        </div>
    )

}
export default CreateProfile