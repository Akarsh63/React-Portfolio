import React,{useState} from 'react'
import './projectscss.css'
import { FaSearch } from "react-icons/fa";
import projects from '../assets/data/projects';
import Projectcard from './Projectcard';

export default function Projectspagecomponent() {
  const [searchprojectname, setSearchname] = useState("")
  return (
    <div>
        <div className='projectscontainer'>
          <div className="heading project">
                    <p className='intro3'>
                    some of my recent works
                    </p>
                    <p className='services_text'>
                    PROJECTS
                    </p>
           </div>
           <div className='projectssearchbar'>
              <form>
                <input value={searchprojectname} type='text' className='searchbar' placeholder='PROJECT NAME' onChange={event => setSearchname(event.target.value)}/>
                <FaSearch className='searchbaricon'/>
              </form>
           </div>
           <div className='allprojects'>
           {projects.filter(post => {
                if (searchprojectname === '') {
                   return post;}
                else if (post.name.toLowerCase().includes(searchprojectname.toLowerCase())) {
                   return post;}
            }).map((project,index)=>{
                        return (
                            <div className='projectsitem' key={index}>
                                <Projectcard
                                    name={project.name}
                                    image={project.img}
                                    text={project.desc}/>
                            </div>
                                );
                    })}
           </div>
       </div>
    </div>
  )
}
