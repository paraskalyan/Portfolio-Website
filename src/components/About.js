import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <>
            <div className='container' id='about-container'>

                <div id='about-content' className='inside-about-container'>
                    <h1>Paras Kalyan</h1>
                    <p className='txt-black'>A passionate and hard working college student learning new things every day and seeks more learning opportunities to become skillful</p>
                    <div id='contact' className='flex flex-col' >
                        <FontAwesomeIcon icon={faLocationDot} />
                        <FontAwesomeIcon icon={faPhone} />
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
                <div id='profile-img' className='inside-about-container'>

                </div>
                <div id='skills' className='inside-about-container flex flex-col'>
                    <h2>Skill 1</h2>
                    <h2>Skill 2</h2>
                    <h2>Skill 3</h2>
                    <h2>Skill 4</h2>
                    <h2>Skill 5 </h2>
                </div>
            </div>
        </>
    )
}

export default About;