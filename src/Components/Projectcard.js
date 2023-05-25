import React from 'react';
import './projectcard.css';
import {Link} from 'react-router-dom';
export default function Projectcard({name,text,image}) {
  return (
    <div>
      {/* repeating card */}
      <div className='project-card'>
            <div className='project-img'>
                <Link to='/projects'>
                <img src={image} alt="project-photo" className='project-photo'  />
                </Link>
                
            </div>
            <div className='project-decription'>
                    <p className='project-name'>{name}</p>
                    <p className='project-text'>{text}</p>
            </div>
            
        </div>
    </div>
  )
}
