import React, {Component} from "react";
import ImageCard from "./ImageCard.js";
import images from '../images.json'
import './styles.css';

class Counter extends Component {
    state = {
        count:0,
        highScore:0,
        image:[0],
    };
    
    checkClicked = id => {

        this.setState({
            count : this.state.count +1
        })

        let arrayImage = this.state.image;
        let filtered = arrayImage.filter(item => 
            item === id
        )
       
        if (this.state.count < 11) {
            if (filtered.length === 0) {
                this.setState({
                    correct:false,
                    image:[...arrayImage, id]  ,
                })
            }
            else if (filtered.length === 1) {
                alert('Oops you picked this one already! Game over!')
                this.setState({
                    image:[0],
                    correct:true,
                    highScore : (this.state.count > this.state.highScore) ? this.state.count : this.state.highScore,
                }, () => {
                    this.setState({count : 0})
                })
            }
        } 
        if (this.state.count === 11) {
            if (filtered.length === 0) {
                this.setState({
                    correct:false,
                    count: this.state.count+1,
                    image : [0],
                }, () => {
                    this.setState({
                        highScore : (this.state.count > this.state.highScore) ? this.state.count : this.state.highScore,
                        count : 0
                    })
                })
            }
            else if (filtered.length === 1) {
                alert('Oops you picked this one already! Game over!')
                this.setState({
                    correct:true,
                    image:[0],
                    highScore : (this.state.count > this.state.highScore) ? this.state.count : this.state.highScore,
                }, () => {
                    this.setState({
                        count:0
                    })
                })
            }
        }
    }

    render () {
        return (
            <div className = 'main-container container'>
                <div id = 'header'>
                    <h1>Adventure Time Memory Game</h1>
                </div>
                <br/>
                <div className = 'message'>{ (this.state.count===0)? 'Click an image to start the game' :(this.state.count > 0) ? 'You guessed correctly!':'You guessed incorrectly!' }</div>
                <div className = 'image-container row'>
                    <div className = 'col-md-2 instructions'>
                        <p>Click on an image to start the game.</p> 
                        <p>To win, you must choose all the pictures only once!</p>
                    </div>
                    <div className = 'col-md-8 image-div'>
                        <ImageCard 
                            clicked = {this.state.isClicked}
                            image = {images} 
                            checkClicked={this.checkClicked}
                        />
                    </div>
                    <div className = 'col-md-2 scores'>
                        Current Score: {this.state.count}
                        <br/>
                        High Score: {this.state.highScore}
                    </div>
                </div>
                
            </div>    
        )
    }
    
}

export default Counter;
