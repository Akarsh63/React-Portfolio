import React from 'react';
import './home3.css';
import Homeservicebox from './Homeservicebox';
import { FaDesktop,FaGamepad } from "react-icons/fa";
import { BiCode } from "react-icons/bi";

export default function Homethr() {
  return (
    <div>
       <div className="all">
            <div className="heading">
                <p className='intro3'>
                What I will do for you
                </p>
                <p className='services_text'>
                SERVICES
                </p>
            </div>
            <div className='services'> 
               <Homeservicebox IconName={<FaDesktop />} name="Web Design" text="I do ui/ux design for the website that helps website to get a unique look."/>
               <Homeservicebox IconName={<BiCode />} name="Web dev" text="I also develop the websites. I create high performance website with blazing fast speed."/>
               <Homeservicebox IconName={<FaGamepad />} name="Pygame" text="I develop games via pygame. I create games with eye catching ui."/>
            </div>
       </div>
    </div>
  )
}
