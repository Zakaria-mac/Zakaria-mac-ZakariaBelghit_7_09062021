import React from 'react';
import {A} from 'hookrouter';
import '../styles/Banner.css'
import logo_white from '../assets/logo_white.png'

function SignUpBanner() {

    return(
            <header>
                <div className='signup_banner'>
                    
                    <div className='img_banner'>
                        <img src={logo_white} className='gpm_logo' alt='Logo de Groupomania' title='Logo de Groupomania'></img>
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

export default SignUpBanner