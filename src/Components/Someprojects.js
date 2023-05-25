import React from 'react'
import './someprojects.css';
import Projectcard from './Projectcard';
import projects from '../assets/data/projects'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
// install Swiper modules
SwiperCore.use([Navigation]);

export default function Someprojects() {
  return (
    <div>
         <div className="home4">
            <div className="heading">
                <p className='intro3'>
                some of my recent works
                </p>
                <p className='services_text'>
                PROJECTS
                </p>
            </div>
            <div className='someproj'>
                <Swiper spaceBetween={30}
                            slidesPerView={3}
                            navigation ={true}
                            breakpoints={{
                              // when window width is >= 10px
                              10: {
                                slidesPerView: 1,
                              },
                              // when window width is >= 768px
                              768: {
                                slidesPerView: 2,
                              },
                              // when window width is >= 1200px
                              1200: {
                                slidesPerView: 3,
                              },
                            }}>
                    {projects.map((project,index)=>{
                        if (index>=5) return null;
                        return (
                            <SwiperSlide key={project.id}>
                                <Projectcard
                                    name={project.name}
                                    image={project.img}
                                    text={project.desc}
                                />
                            </SwiperSlide>
                        // <div><Projectcard image={ProjectImg} name="U tracker" text='An application to track your all data from one place. I developed the website and mobile app.' /></div>
                        );
                    })}
                </Swiper>
            </div>
       </div>
    </div>
  )
}
