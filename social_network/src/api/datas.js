import React from 'react'
import afterwork from '../assets/afterwork.jpg'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'

export const messagelist = [
    {
        id:'123',
        name :'Dupond Henri',
        department: 'Finance',
        object:'Sorti/afterwork',
        message:'Salut la compagnie ! qui est dispo pour un afterwork ?',
        cover: afterwork,
        like: like,
        dislike:dislike,

    },
    {
        id:'124',
        name :'Enrique',
        department: 'Tech',
        object:'Problème technique',
        message:'Salut  ! Pour l\'équipe tech, j\'ai un soucis avec mon lien',
        cover: '',
        like: like,
        dislike:dislike,

    },
    {
        id:'125',
        name :'Maluma',
        department: 'CEO',
        object:'Café/croissant',
        message:'Salut tout le monde ! j\'ai dépose des croissant.choco sur la table ce matin',
        cover: '',
        like: like,
        dislike:dislike,

    },
    {
        id:'127',
        name :'Madonna',
        department: 'Happiness Manager',
        object:'Babyfoot cassé',
        message:'Salut, le baby-foot est cassé ! Un technicien va venir vite pour le réparer.',
        cover: '',
        like: like,
        dislike:dislike,

    }
]
