import React from 'react';
import './styles.css'
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
const ImageCard = (props) => {
    const shuffledArray = shuffleArray(props.image)

    return (
        <div>
            {shuffledArray.map(data => {
                return (
                    <img className = 'images' 
                        key = {data.id} 
                        id = {data.id} 
                        onClick = { () =>props.checkClicked(data.id) } 
                        src= {data.image} 
                        alt= {data.name}
                    />
                    )
                })}
        </div>
    ) 
}


export default ImageCard;