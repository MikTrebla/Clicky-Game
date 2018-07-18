import React, {Component} from "react";
import ImageCard from "./ImageCard.js";
import images from '../images.json'
import './styles.css';

class Counter extends Component {
    state = {
        count:0,
        highScore:0,
        image:[0]
      };
    
    handleIncrement = id =>{
        if (this.state.count === 9) {
            alert('You win!');
            this.setState({
                highScore : this.state.count,
                image :[0],
                count: 0
            })
        }
         else if (this.state.count < 9){
            this.checkClicked(id);
        }
    };
    
    checkClicked = id => {
        let arrayImage = this.state.image;

        arrayImage.forEach(item => {
            if (id !== item){
                let userArray = [...arrayImage,id];
                this.setState({
                    image : userArray,
                    count : this.state.count + 1
                })
            } else if (id === item) {
                alert('Oops. You clicked this twice!') 
                this.setState({
                    highScore :(this.state.count > this.state.highScore) ? this.state.count : this.state.highScore,
                    image : [0]
                }, () => {
                    this.setState({
                        count:0
                    })
                })
            }
        })
    }

    render () {
    
        
        return (
            <div className = 'main-container container'>
                <div id = 'header'>
                    <h1>Memory Game:</h1>
                    <h3>Adventure Time</h3>
                </div>
                <br/>
                <div className = 'image-container row'>
                    <div className = 'col-md-3 instructions'>
                        <p>Click on an image to start the game.</p> 
                        <p>To win, you must choose all the pictures only once!</p>
                    </div>
                    <div className = 'col-md-6 image-div'>
                        <ImageCard clicked = {this.state.isClicked}image = {images} handleIncrement={this.handleIncrement}/>
                    </div>
                    <div className = 'col-md-3 scores'>
                        Current Score: {this.state.count}
                        <br/>
                        High-Score: {this.state.highScore}
                    </div>
                </div>
                
            </div>    
        )
    }
    
}

export default Counter;
