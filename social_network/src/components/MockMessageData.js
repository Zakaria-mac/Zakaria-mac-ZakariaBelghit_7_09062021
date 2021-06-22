import React from 'react';
import '../styles/MessageList.css'


function MockDataMessage ({ id, name, department, object, cover, message, like, dislike }){
    return (
		<li key={id} className='messageItem'>
			<h2 className='title_front_page'>{name} de l'équipe {department}</h2>
			
			<h3 className='title_message_list'>
				{object}
			</h3>
			<p className='message'>
				{message}
			</p>
			<div>
				<img src={cover} className='img_cover' alt={`${name} cover`} />
			</div>
			<div className='buttons'>
				<img src={like} className='like_button' alt={`${like}`} />
				<img src={dislike} className='dislike_button' alt={`${dislike}`}/>
			</div>
			
		
		</li>
	)
}

export default MockDataMessage