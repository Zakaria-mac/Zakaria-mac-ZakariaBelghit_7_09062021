import React from 'react'
import { getProfileData } from '../api/routes'
import { useRef, useEffect } from 'react'


function PersonalInfo({ infoProfile, setInfoProfile, alert }){

    const mounted = useRef(true)

    useEffect(() => {
        mounted.current = true
        if(infoProfile.length && !alert){
            return;
        }
        getProfileData()
            .then(data => {
                if(mounted.current){
                    setInfoProfile(data)
                }
            })
        return() => mounted.current = false;
    }, [alert, infoProfile])

return(
    
    <div>
        <h3>Votre profil</h3>

    <div>
        "Hello l'équipe ! Si vous ne me connaissez pas, ce petit texte de présentation pourra vous en dire plus sur mon travail, mes envies, mes passions.
        Je m'appelle  et je fais et serais heureux·se de vous en parler davantage lors d'un afterwork ou en séminaire ! &#128512;"
    </div>
    </div>

)   
}
export default PersonalInfo