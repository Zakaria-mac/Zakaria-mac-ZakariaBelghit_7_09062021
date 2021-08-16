export async function getMessages(){
    const data = await fetch('http://localhost:3000/api/messages')
    return await data.json()
};

export async function getOneMessage(){
    const data = await fetch('http://localhost:3000/api/messages/:id')
    return await data.json()
};

export async function getProfileData(){
    const data = await fetch('http://localhost:3000/api/profile')
    return await data.json()
};

export async function setSignup(userName, password){
    const data = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password })
    })
    return await data.json()
};

export async function setLogin(userLogin, userLogPassword){
    const data = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userLogin, userLogPassword })
    })
    return await data.json()
};

export async function setProfile(name, department, leisure){
    const data = await fetch('http://localhost:3000/api/profile', {    
    method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, department, leisure })
    })
    return await data.json()
};

export async function setMessageInput(name, department, object, message, cover, like, dislike){
    const data = await fetch('http://localhost:3000/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, department, object, message, cover, like, dislike})
    })
    return await data.json()
};

export async function modifyMessage(message, object, cover){
    const data = await fetch('http://localhost:3000/api/messages/:id', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message, object, cover })
    })
    return await data.json()
};

export async function deleteMessage(){
    const data = await fetch('http://localhost:3000/api/messages/:id', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return await data.json()
};

export async function setLikeMessages(like){
    const data = await fetch('http://localhost:3000/api/messages/:id/like', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ like })
    })
    return await data.json()
};

export async function setDislikeMessages(disLike){
    const data = await fetch('http://localhost:3000/api/messages/:id/like', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ disLike })
    })
    return await data.json()
};
