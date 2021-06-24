import React from 'react';
import {A} from 'hookrouter';
import '../styles/Banner.css'
import logo_white from '../assets/logo_white.png'

function Banner() {
    const title='Réseau social interne'

    return(
            <header>
                <div className='gpm_banner'>
                    
                    <div className='row_banner'>
                        <img src={logo_white} className='gpm_logo' alt='Logo de Groupomania' title='Logo de Groupomania'></img>
                        <h1 className='gpm_title'>{title}</h1>
                    </div>

                    <nav>
                        <ul className='nav_banner'>
                            <li>
                                <A href='/signup/' className='nav_inscription'>Inscrivez-vous</A>
                            </li>
                            <li>
                                <A href='/login/' className='nav_connexion'>Connectez-vous</A>
                            </li>
                        </ul>
                    </nav>        

                </div>
            </header>
    )
}

export default Banner