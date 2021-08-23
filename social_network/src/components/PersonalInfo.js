import React from 'react'
import { useEffect, useState } from 'react'


function PersonalInfo(){

    const [infoProfile, setInfoProfile]= useState([]) 
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=> {
        fetch('http://localhost:3000/api/auth/profile')
            .then(res => res.json())
            .then(
                (dataProfile) => {
                    setIsLoaded(true);
                    setInfoProfile(dataProfile.infoProfile)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                }
            )
    }, [])

    function handleSubmit(e){
        e.preventDefault();

        const modifyData = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ infoProfile })
        };
        fetch('http://localhost:3000/api/auth/profile/', modifyData)
            .then(res => res.json())
            .then(() => 
                    setInfoProfile(''))
    };
   
    if(error) {
        return <div>Erreur: {error.message}</div>
    } else if (!isLoaded){
        return <div>Chargement...</div>;
    } else{
        return(
        
            <div>
                <h3>Votre profil</h3>
                <div>
                    {infoProfile.map(dataProfile => 
                        <div key={dataProfile._id}>
                            
                            "Hello l'équipe ! Si vous ne me connaissez pas, ce petit texte de présentation pourra vous en dire plus sur mon travail, mes envies, mes passions.
                            Je m'appelle {dataProfile.name} et suis au service {dataProfile.department}. J'aime beaucoup {dataProfile.leisure} et je serais heureux·se de vous en parler davantage lors d'un afterwork ou en séminaire ! &#128512;"

                        </div> 
                    )}
                    <button onSubmit={handleSubmit}>Modifier</button>
                </div>
            </div> 
            
            )   
        }
    }
export default PersonalInfo