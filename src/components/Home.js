import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Home = ()=>{
    return(
        <div className='container' id='home-container'>
            <div className='left-content flex'>
                <h1 id='main-head' className='bg-style'>I am an Engineer & Developer with a passion for Space & Rockets</h1>
                <div className='social-icons flex'>
                    <a target = '_blank' href='https://www.twitter.com/paras_eth'> <FontAwesomeIcon icon={faTwitter} size='2x' className='icon'/></a>
                    <a href='https://www.github.com/paraskalyan'> <FontAwesomeIcon icon={faGithub}  size='2x' className='icon'/></a>
                    <a href='https://www.linkedin.com/in/paras-kalyan-630017191/'> <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon'/></a>
                </div>
            </div>
        </div>
    )
}

export default Home;