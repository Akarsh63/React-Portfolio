import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';
import resumeFile from '../assets/data/Sai_Mani_Akarsh_Rankireddy_Resume.pdf';
export default function Footer() {
  const openResumeInNewTab = () => {
    window.open(resumeFile, '_blank');
  };
  return (
    <div>
      <div className='footer'>
        <div className='footer_about'>
            <h1 className='footn'>Akarsh</h1>
            <p className='footp'>A web designer and developer from Andhra Pradesh, India. I always make websites that have unique designs and also has a good performance rate.</p>
        </div>
        <div className='footlinks'>
            <p className='heading_footer'>Important Links</p>
            <ul className='ulist'>
                <li className='lilist'><Link to='/'>Home</Link></li>
                <li className='lilist'><Link to='/about'>About</Link></li>
                <li className='lilist'><Link to='/projects'>Projects</Link></li>
                <li className='lilist'><Link onClick={openResumeInNewTab} >Resume</Link></li>
            </ul>
        </div>
        <div className='footlinks'>
            <p className='heading_footer'>Contact info</p>
            <ul>
                <li className='lilist'><a>+91 7842559379</a></li>
                <li className='lilist'><a>akarsh.1@iitj.ac.in</a></li>
                <li className='lilist'><a>Andhra Pradesh, India</a></li>
            </ul>
        </div>
        <div className='footlinks'>
            <p className='heading_footer'>Social Links</p>
            <ul>
                <li className='lilist'><a>Facebook</a></li>
                <li className='lilist'><a>Instagram</a></li>
                <li className='lilist'><a>Twitter</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
