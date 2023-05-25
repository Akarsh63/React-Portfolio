import React from 'react';
import './aboutsection.css';
import Profileimg from '../assets/images/about-page-img.png';
import resumeFile from '../assets/data/Sai_Mani_Akarsh_Rankireddy_Resume.pdf';
import Edskexp from './Edskexp';

export default function AboutSection() {
  return (
    <div>
       <div className='container'>
         <div className='top-section'>
            <div className='left-section'>
                <div className='introinaboutpage'>
                    <p className='subheadingabout'>Hi, I am <spam className="nameabout">Akarsh</spam></p>
                    <p className='headingabout'>A Frontend Web Developer</p>
                </div>
                <div className='about__info'>
                    <p>I am from AndhraPradesh, India. A place of beauty and nature. Since my childhood, i love art and design. I always try to design stuff with my unique point of view. I also love to create things that can be usefull to others.<br/><br/>I started coding from my Btech 1st year. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.<br/><br/>My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.</p>
                </div>
                <div>
                <a href={resumeFile} download="Akarsh_Resume.pdf" className='download_resume'>Download CV</a>
                </div>
            </div>
            <div className='right-section'>
                <img src={Profileimg} alt="Profile Photo" className='profilepic3' />
            </div>
         </div>
         <div className='down-section'>
           <div className='aboutinfoitems'>
             <div className='aboutiteminfo'>EDUCATION</div>
             <Edskexp title='School' elements={['Tirumala High School']} />
             <Edskexp title='College' elements={['Tirumala Educational Institutions']} />
             <Edskexp title='University' elements={['IIT JODHPUR']} />
           </div>
           <div className='aboutinfoitems'>
             <div className='aboutiteminfo'>MY SKILLS</div>
             <Edskexp title='Frontend' elements={['HTML','CSS','JAVASCRIPT','REACT']} />
             <Edskexp title='Programming' elements={['C++','C','Python']} />
             <Edskexp title='Design' elements={['FIGMA']} />
             <Edskexp title='Gamming' elements={['PYGAME']} />
           </div>
           <div className='aboutinfoitems'>
             <div className='aboutiteminfo'>RANKS / PERCENTAGES</div>
             <Edskexp title='Tenth' elements={['100 %']} />
             <Edskexp title='Intermediate' elements={['98.6 %']} />
             <Edskexp title='JEE-MAINS' elements={['4674']} />
             <Edskexp title='IIT-JEE' elements={['4238']} />
           </div>
         </div>
       </div>
    </div>
  )
}
