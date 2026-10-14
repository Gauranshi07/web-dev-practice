import './LikeButton.css'
import {useState} from 'react'

const LikeButton = () => {
    const [isLiked,setIsLiked]=useState(false);
    const [clicks,setClicks]=useState(0);
    function handleClick(){
        setIsLiked((!isLiked));
        setClicks(clicks+1);
    }
  return (
    <div>
        <div className="like-button">
        <p className="likes-count">Likes : {clicks}</p>
        <button className="btn" onClick={handleClick}>
            {
                isLiked ? <i class="fa-solid fa-heart" style={{color:'red'}}></i> : <i class="fa-regular fa-heart"></i> 
            }
        </button>
        </div>
    </div>
  )
}

export default LikeButton