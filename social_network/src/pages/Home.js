import React from 'react';
import SignUpBanner from '../components/SignupBanner';
import signup_page from '../assets/signup_page.jpeg'
import '../styles/Home.css'


function Home() {
    const title='Welcome to this social network'

    return(
        <div>
            <header>

                <SignUpBanner />

            </header>
            
            <section>

            <div className="home_base">

                <div className="home_text"> 
                    <h1 className="home_title">Bienvenue dans votre communauté professionnelle ! </h1>

                    <p className="home_message">Ici, vous pourrez échanger, partager vos idées, vos suggestions, et 
                    recevoir toutes les dernières nouveautés à Groupomania. </p>
                </div>
                
                <div className="home_img">
                    <img className="img" src={signup_page} alt="Image de cohésion d'équipe - Groupomania" title="Image de cohésion d'équipe - Groupomania"></img>
                </div>
            
            </div>

            </section>
            
        </div>
    )
}
export default Home