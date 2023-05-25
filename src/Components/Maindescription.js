import React from 'react'
import profilepicture from "../assets/images/hero.jpg";
import './maindescription.css';
import {Link} from 'react-router-dom';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

export default function Maindescription() {
  return (
    <div className='home_description1'>
      <div className='home_description'>
        <div className='home_description_name_greet'>
          <div style={{backgroundColor:'transparent'}}>
              <p className='greeting_home'>Hello, This is</p>
              <p className='name_home'>Akarsh</p>
          </div>
        </div>
          
          <img src={profilepicture} alt="Profile Picture" className='profile1_home'/>
          <div className='ptextcon'>
              <p className='ptext'>I am a Frontend Web developer.I love to design and develop the Websites.</p>
          </div>
          <div  className='work_home_div'>
              <Link className='work_home' to='./projects'>See my Works</Link>
          </div>
          <div className='follow_home'>
              <div className='follow_social_home'>Connect</div>
              <div className='socialmedia'>
                <img src={SocialMediaArrow} alt="arrow" class="followrrow"/>
              </div>
              <div className='social_icons'>
                <ul>
                  <li><a href="https://www.linkedin.com/in/sai-mani-akarsh-rankireddy-b5717b22a" target='_blank'>LI</a></li>
                  <li><a>GH</a></li>
                  <li><a>IG</a></li>
                  <li><a>FB</a></li>
                </ul>
              </div>
          </div>
          <div className='scroll_home'>
            <div className='scroll_home_text'>Scroll</div>
            <div>
               <img src={ScrollDownArrow} alt="arrow" className='scrolldown' />
            </div>
          </div>
        </div>
    </div>
    
  )
}
