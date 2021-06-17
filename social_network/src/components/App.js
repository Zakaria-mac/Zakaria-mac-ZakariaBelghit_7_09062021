import React, { useState } from 'react';
import { useRoutes } from 'hookrouter'
import '../styles/App.css';

import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home'
import ForumSpace from '../pages/ForumSpace'
import Profile from '../pages/Profile'

const routes = {
  '/':()=> <Home />,
  '/signup/':() => <Signup />,
  '/signup/login/':() => <Login />,
  '/signup/login/forumspace/':()=> <ForumSpace />,
  '/signup/login/profile/':()=> <Profile />
}


function App(){

    const match = useRoutes(routes)

    return  <div>
              { match }
            </div>
}

export default App
