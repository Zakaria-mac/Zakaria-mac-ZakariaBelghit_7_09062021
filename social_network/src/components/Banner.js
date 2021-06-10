import React, { Component } from 'react';
import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = 'Groupomania - Réseau social interne'

    return(
        <div className='gpm_banner'>
            <img src={logo} className='gpm_logo'></img>
            <h1 className='gpm_title'>{title}</h1>
        </div>
    )
}

export default Banner