import React, { useEffect, useState } from 'react';
import { useRoutes } from 'hookrouter'

import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home'
import Forum from '../pages/Forum'
import Profile from '../pages/Profile'
import UpdateMessage from '../pages/UpdateMessage'


function App(){

    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [object, setObject] = useState('')
    const [message, setMessage] = useState('')
    const [cover, setCover] = useState('')
    const [messageList, setMessageList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false); 
    const [error, setError] = useState(null);   
   
    
  const routes = {
    '/':()=> <Home />,
    '/signup':() => <Signup />,
    '/login':() => <Login />,
    '/user/forum':()=> <Forum 
                          name={name} setName={setName}
                          department={department} setDepartment={setDepartment}
                          object={object} setObject={setObject}
                          message={message} setMessage={setMessage}
                          cover={cover} setCover={setCover}
                          messageList={messageList} setMessageList={setMessageList}
                          isLoaded={isLoaded} setIsLoaded={setIsLoaded}
                          error={error} setError={setError}
                          />,
    '/user/profile':()=> <Profile />,
    '/user/forum/message/:id':({id}) => <UpdateMessage id={id}
                                      name={name} setName={setName}
                                      department={department} setDepartment={setDepartment}
                                      object={object} setObject={setObject}
                                      message={message} setMessage={setMessage}
                                      cover={cover} setCover={setCover}
                                      messageList={messageList} setMessageList={setMessageList}
                                      isLoaded={isLoaded} setIsLoaded={setIsLoaded}
                                      />
  }
    const match = useRoutes(routes)

    useEffect(() => {
      document.title = 'Groupomania'
    },[])
    

    return  <div>
              { match }
            </div>

            
}

export default App
