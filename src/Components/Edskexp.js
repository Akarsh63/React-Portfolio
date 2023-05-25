import React from 'react';
import './edskexp.css'

export default function Edskexp({title='this is title',elements=['html','css']}) {
  return (
    <div className='itemcont'>
        <div className='edskexp'>{title}</div>
        <div className='items'>
            {elements.map((item,index)=>(
                 <div className='item' key={index}>
                    <p>{item}</p>
                 </div>
            ))}
        </div>
    </div>
  )
}
