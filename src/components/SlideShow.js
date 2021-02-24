import React, {Component} from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {IconButton} from '@material-ui/core';
import '../css/SlideShow.css'

class SlideShow extends Component {

    constructor(){
        super()
        this.state = {
            index: 0,
            images: [image1, image2, image3, image4, image5]
        }
    }

    onClickBack = () => {
        if(this.state.index -1 === -1){
            this.setState({
                index: this.state.images.length-1
            })
        }else{
            this.setState({
                index: this.state.index - 1
            })
        }

    }

    onClickForword = ()=> {
        if(this.state.index + 1 === this.state.images.length){
            this.setState({
                index: 0
            })
        }else{
            this.setState({
                index: this.state.index + 1
            })
        }

    }

    render(){
        return(
            <div>
                <p>Slide Show</p>
                <p>{this.state.index + 1}/{this.state.images.length}</p>
                <div className="slideShow">
                <div className="buttons">
                    <IconButton aria-label="delete">
                        <ArrowBackIosIcon onClick={this.onClickBack}/>
                    </IconButton>
                </div>
                <div className="image">
                    <p></p>
                    <img src={this.state.images[this.state.index]} alt=""></img>
                    <p></p>
                </div>
                <div className="buttons">    
                    <IconButton aria-label="delete">
                        <ArrowForwardIosIcon onClick={this.onClickForword}/>
                    </IconButton>
                </div>
                </div>
            </div>
        )
    }
}

export default SlideShow