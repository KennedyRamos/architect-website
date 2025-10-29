import { useState, useEffect } from 'react';
import './ProjectsList.css';

// ASSETS
import LikeFilled from '../../assets/like-black.svg'
import Like from '../../assets/like-transparent.svg'

// UTILS
import { getApiData } from '../../services/apiServices';

export default function ProjecstsList(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fatchData = async () => {
          try {
            const projectsResponse = await getApiData('projects');
            setProjects(projectsResponse);
          } catch {
            setProjects([])
          } 
        }

        fatchData();
    }, []);

    return(
        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
            <div className='projects-grid'>
                {
                    projects.map((project) => (
                        <div className='project-card d-flex jc-center al-center fd-column' key={project.id}>
                            
                            <div className='thumb smooth' style={{backgroundImage:'url(https://images.adsttc.com/media/images/629c/1ffb/3e4b/318b/6300/0002/slideshow/Cristobal_Palma-Estudio_Palma.jpg?1654398966)'}}>
                            </div>

                            <h3>{project.title}</h3>

                            <p>{project.subtitle}</p>

                            <img src={LikeFilled} />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}