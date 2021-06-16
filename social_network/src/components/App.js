import React, { useState } from 'react';
import { useRoutes } from 'hookrouter'
import '../styles/App.css';

import Signup from '../pages/Signup';
import CreateAccount from './CreateAccount';
import Login from '../pages/Login';
import Home from '../pages/Home'
import ForumSpace from '../pages/ForumSpace'
import Profile from '../pages/Profile'

const routes = {
  '/':()=> <Home />,
  '/signup':() => <Signup />,
  '/signup/profile':() => <Profile />,
  '/login':() => <Login />,
  '/login/forumspace':()=> <ForumSpace />,
  '/login/profile':()=> <Profile />
}


function App(){
    const [userName, setUserName]=useState([])
    const [password, setPassword]=useState([])

    const match = useRoutes(routes)

    return  <div>
              { match }
            </div>
}

export default App
