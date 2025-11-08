import { useContext, useState, useEffect } from 'react';
import './ProjectsList.css';

// ASSETS
import LikeFilled from '../../assets/like-black.svg'
import LikeOutline from '../../assets/like-transparent.svg';

// COMPONENTS
import Button from '../Button/Button'

// UTILS
import { getApiData } from '../../services/apiServices';

// CONTEXT
import { AppContext } from '../../contexts/AppContext';

export default function ProjecstsList(){

    const appContext = useContext(AppContext)

    const [projects, setProjects] = useState([]);

    const [favProjects, setFavProjects] =useState([])

    const handleSavedFavProjects =  (id) => {
        setFavProjects((prevFavProject) => {
            if (prevFavProject.includes(id)) {
                const filterArray = prevFavProject.filter((projectId)=> projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProject.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProject, id]))
                return[...prevFavProject, id]
            }
        })
    }

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

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects){
            setFavProjects(savedFavProjects)
        }
    }, [])

    return(
        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className='projects-grid'>
                {
                    projects.map((project) => (
                        <div className='project-card d-flex jc-center al-center fd-column' key={project.id}>
                            
                            <div className='thumb smooth' style={{backgroundImage:'url(https://images.adsttc.com/media/images/629c/1ffb/3e4b/318b/6300/0002/slideshow/Cristobal_Palma-Estudio_Palma.jpg?1654398966)'}}>
                            </div>

                            <h3>{project.title}</h3>

                            <p>{project.subtitle}</p>

                            <Button buttonStyle="unstyled" onClick={() => handleSavedFavProjects(project.id)}>
                                <img src={favProjects.includes(project.id) ?LikeFilled : LikeOutline} />
                            </Button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}