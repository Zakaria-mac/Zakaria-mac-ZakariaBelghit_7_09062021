import React from 'react';
import { A } from 'hookrouter'

function Home() {
    const title='Welcome to this social network'

    return(
        <div>
        <A href='/signup/'>{title}</A>
        </div>
    )
}
export default Home