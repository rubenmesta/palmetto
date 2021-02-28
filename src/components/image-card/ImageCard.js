import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import { Button} from 'react-bootstrap';
import './image-card.scss';


const ImageCard = ({ image, ...props }) => {

    const tags = image.tags.split(',');

    const id = image.id;  
    const url = image.webformatURL;
  
    const [isSaved, updateSave] = useState(false);
    const [color,setColor] = useState('default');
    const [buttonText,setButtonText] = useState('Save');
    const [liked, setLikes] = useState(`${image.likes}`);
    const [background, setBackground] = useState("#a94965");
    
    const [islikeText, setLiketext] = useState(false);
    

    const setStyle = (background) => {
        setBackground(background);
      };

    const handleSave = () => {

      if (!isSaved) {
        updateSave(true);
        setButtonText("Saved");
        setStyle("#d88c4d", "#a94965");
        props.updateSavedImages([<a href={url} target="_blank" rel="noreferrer" id={id}>#{id}</a>]);
      } 
      else {
        updateSave(false);  
      }
    };
   
    const addLike = () => {
        setLikes(`${image.likes + 1}`)
        setColor("#990000");
        setLiketext(!islikeText);
    };


    return (

    <React.Fragment>
    <div className="card">
        <div className="row">
                <div className="col col-sm-12 col-md-6 card-img-container">
                    {/* Image */}
                    <div className="image">
                        <img alt={image.user} src={image.webformatURL}/>
                    </div>
                    {/* Save Button*/}
                    <Button onClick={handleSave} 
                        disabled={isSaved}
                        className="card-button"
                        style={{background}}
                        >{buttonText}
                    </Button>
                </div>

                <div className="col col-sm-12 col-md-6 details">
                    <div className="tags">
                        {tags.map((tag, index) => (
                        <div key={index}  className="tag-item">
                        {tag}
                        </div>
                        ))}
                    </div>
            <div className="social">
                        
                {/* Likes */}
                <div className="social-item">
                    <span className="count">{liked}</span>
                    <IconButton 
                    onClick={addLike} 
                    aria-label="like" 
                    style={{color}}
                    className={`icon ${islikeText ? "liked" : ""}`}
                    >
                    <ThumbUpAltRoundedIcon style={{ marginLeft: 5 }} />
                    </IconButton>
                    <span className={`like-text ${islikeText ? "liked" : ""}`}>Liked!</span>
                </div>
                {/* Favorites */}
                <div className="social-item">
                    <span className="count">{image.favorites}</span>
                    <IconButton 
                        aria-label="favorites" 
                        className="icon">
                        <StarRoundedIcon style={{ marginLeft: 5 }}  />
                    </IconButton>
                </div>
            </div>
            </div>
        </div>
    </div>

       </React.Fragment>
    )
  }
  
  export default ImageCard;