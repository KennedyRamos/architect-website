import './LoadingSpinner.css';
import LoadingSpinnerGif from '../../assets/loading-spinner.gif'

export default function LoadingSpinner(){
    return(
        <div className='d-flex jc-center al-center loading-overlay-container'>
            <img src={LoadingSpinnerGif} />
        </div>
    )
}