import './ProjectsList.css';

// ASSETS
import LikeFilled from '../../assets/like-black.svg'
import Like from '../../assets/like-transparent.svg'

export default function ProjecstList(){
    return(
        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
            <div className='projects-grid'>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb smooth'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={LikeFilled} />
                </div>

                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb smooth'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={LikeFilled} />
                </div>

                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb smooth'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={LikeFilled} />
                </div>

                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb smooth'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={LikeFilled} />
                </div>

                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb smooth'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={LikeFilled} />
                </div>

                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb smooth'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={LikeFilled} />
                </div>

            </div>
        </div>
    )
}