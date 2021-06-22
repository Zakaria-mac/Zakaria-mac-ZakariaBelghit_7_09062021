import React from 'react';
import '../styles/MockDataMessage.css'


function MockDataMessage ({ id, name, object, message, images, like, dislike }){
    return (
		<li key={id} className='messageItem'>
			<img src={images} className='img_cover' alt='Afterwork' />
		
			{name}
			{object}
			{message}
			{images}
			{like}
			{dislike}
		</li>
	)
}

export default MockDataMessage