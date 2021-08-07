import React from 'react';
import { useState } from 'react';
import {A} from 'hookrouter';
import '../styles/Header.css'
import logo_white from '../assets/logo_white.png'


function Header() {
    const [infoForm, setInfoForm] = useState('')
    
    return(
        
        <header>
                <div className='header'>
                    
                    <div className='banner'>
                        <A href='/login/forumspace/'>
                            <img src={logo_white} className='logo' alt='Logo de Groupomania' title='Cliquez pour plus de contenu'></img>
                        </A>
                    </div>

                    <div>
                        <input  className='lookinForInfo'
                                type='text'
                                name='lookinForInfo' 
                                placeholder='Rechercher dans le forum'
                                value={infoForm}
                                onChange={(e)=> setInfoForm(e.target.value)}>   
                        </input>
                    </div>

                    <nav className='navigation_banner'>
                        <ul className='navigation_choices'>
                            <li>
                                <A href='/forumspace/' className='navigation_home'>Accueil</A>
                            </li>
                            <li>
                                <A href='/profile/' className='navigation_profile'>Votre profil</A>
                            </li>
                            <li>
                                <A href='/' className='navigation_logoff'>Déconnection</A>
                            </li>
                        </ul>
                    </nav>        

                </div>
            </header>
    )
}
export default Header
