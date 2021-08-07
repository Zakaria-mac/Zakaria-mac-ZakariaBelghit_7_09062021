import React, { useEffect, useState } from 'react';
import { useRoutes } from 'hookrouter'
import '../styles/App.css';

import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home'
import ForumSpace from '../pages/ForumSpace'
import Profile from '../pages/Profile'

import { getMessage } from '../api/routes'


function App(){

  const routes = {
    '/':()=> <Home />,
    '/signup/':() => <Signup />,
    '/login/':() => <Login />,
    '/login/forumspace/':()=> <ForumSpace />,
    '/login/profile/':()=> <Profile />
  }
    const match = useRoutes(routes)
    

    return  <div>
              { match }
            </div>

            
}

export default App
