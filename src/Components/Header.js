import React, { useState } from 'react';
import './header.css'
import {Link} from 'react-router-dom';
import { FaBars,FaRegTimesCircle } from "react-icons/fa";
import resumeFile from '../assets/data/Sai_Mani_Akarsh_Rankireddy_Resume.pdf';

function Header(){
    const [shownav,setshownav] = useState(false);
    const openResumeInNewTab = () => {
        window.open(resumeFile, '_blank');
      };
   return (
    <div className='header'>
        <div className="mob_icon_menu" onClick={()=>{setshownav(!shownav)}}>
        <FaBars />
        </div>
        <ul className={!shownav?'navitems hide':'navitems'}>
            <div className='closenav'onClick={()=>{setshownav(!shownav)}}>
               <FaRegTimesCircle />
            </div>
            <Link to='/' exact='true' onClick={()=>{setshownav(!shownav)}}><li >Home</li></Link>
            <Link to='/about' onClick={()=>{setshownav(!shownav)}}><li>About</li></Link>
            <Link to='/projects' onClick={()=>{setshownav(!shownav)}}><li>Projects</li></Link>
            <Link onClick={openResumeInNewTab}><li>Resume</li></Link>
        </ul>
    </div>
   );
}
export default Header