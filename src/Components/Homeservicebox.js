import React from 'react';
import './homeservicebox.css'


export default function Homeservicebox({name,text,IconName}) {

  return (
    
    <div>
        {/* repeating card */}
        <div className='card'>
            <div className='card-icon'>
                {IconName}
            </div>
            <div className='card-name'>{name}</div>
            <div className='card-text'>{text}</div>
        </div>
      
    </div>
  )
}
