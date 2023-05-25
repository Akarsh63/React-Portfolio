import React from 'react'
import './abouthome.css';
import {Link} from 'react-router-dom';
import Aboutimghome from '../assets/images/about-sec-img.png';

export default function Abouthome() {
  return (
    <div>
      <div className='home2ndelement'>
        {/* text */}
            <div className='felx'>
              <div className='abouthometextdiv'>
                  <div className='abouthometext'>
                      <p className='intro2'>Let me introduce myself</p>
                      <p className='ABOUTME'>ABOUT ME</p>
                  </div>
              </div>
              
              <div>
                <p className='decab'>I am a website designer and developer from AndhraPradesh, India. I love art and always try to create unique websites to the audience through my design. I am pursuing Btech from IIT JODHPUR, RAJASTHAN.</p>
              </div>
              <div className='buttons2'>
                <ul>
                    <li ><Link className='workssec' to='./projects'>Works</Link></li>
                    <li><Link className='readssec' to='./about'>Read More</Link></li>
                </ul>
                
              </div>
            </div>
        {/* image */}
            <div className='imgdiv2'>
              <img src={Aboutimghome} alt="Profile Picture" className='profile2_home' />
            </div>

        </div>
    </div>
  )
}
