import React, { Component } from 'react';
import '../styles/Banner.css'
import logo_white from '../assets/logo_white.png'

function Banner() {
    const title = 'Réseau social interne'

    return(
        <header>
            <div className='gpm_banner'>
                
                <div className='row_banner'>
                    <img src={logo_white} className='gpm_logo' alt='Groupomania'></img>
                    <h1 className='gpm_title'>{title}</h1>
                </div>

                <div className='nav_banner'>
                    <a href='#' className='nav_inscription'> Inscription </a>
                    <a href='#' className='nav_connexion'> Connexion </a>
                </div>

            </div>
        </header>
    )
}

export default Banner