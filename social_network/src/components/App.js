import React from 'react';
import { useRoutes } from 'hookrouter'


import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home'
import Forum from '../pages/Forum'
import Profile from '../pages/Profile'


function App(){

  const routes = {
    '/':()=> <Home />,
    '/signup':() => <Signup />,
    '/login':() => <Login />,
    '/user/forum':()=> <Forum />,
    '/user/profile':()=> <Profile />
  }
    const match = useRoutes(routes)
    

    return  <div>
              { match }
            </div>

            
}

export default App
