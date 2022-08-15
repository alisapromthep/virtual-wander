import React from 'react';
import './Carousel.scss';
import {Component} from 'react'


class Carousel extends Component{ 


    videoIdArray = this.props.videoArray.map((video)=>{
        return video.link
    })

    arrowLeft = `<`;
    arrowRight = `>`;

    index = 0

    state = {
        index: this.index,
    }

    leftHandler = (event)=>{
        event.preventDefault(); 
        console.log(`left click`)

        if (this.state.index === 0) {
            this.index = this.videoIdArray.length-1
        } else {
            this.index --;
        }

        this.setState({
            index: this.index
        })
        console.log(this.index)

    }

    rightHandler = (event)=>{
        event.preventDefault(); 
        console.log(`right click`)

        if (this.state.index === this.videoIdArray.length-1) {
            this.index = 0;
        } else {
            this.index ++;
        }

        this.setState({
            index: this.index
        })
        console.log(this.index)
    }

    render() {
    
        return (
            <div className='carousel'>
                <button className='carousel__button carousel__button--left' onClick={this.leftHandler}> {this.arrowLeft} </button>
                <article className='carousel__container'>
                    <iframe width="420" height="315" 
                    src={`https://www.youtube.com/embed/${this.videoIdArray[this.state.index]}`}>
                    </iframe> 
                </article>
                <button className='carousel__button carousel__button--right' onClick={this.rightHandler}> {this.arrowRight} </button>
            </div>
        );
    };
}


export default Carousel;