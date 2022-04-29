import React from 'react';
import './Carousel.scss';
import {Component} from 'react';

class Carousel extends Component {

    arrowLeft = `<`;
    arrowRight = `>`;

    videoArray = [`JG3jZfbchPg`, `0QMt8iHtbDI`, `IWNa18KXmmg`]

    index = 0;

    state = {
        videoId: this.videoArray[0]
    }

    leftHandler = (event)=>{
        event.preventDefault(); 
        console.log(`clicking left`);

        this.index --;

        this.setState({
            videoId: this.videoArray[this.index]
        })
    }

    rightHandler = (event)=>{
        event.preventDefault(); 
        console.log(`clicking right`)

        this.index ++;

        this.setState({
            videoId: this.videoArray[this.index]
        })
    }

    render() {
        return (
            <div className='carousel'>
                <button className='carousel__button carousel__button--left' onClick={this.leftHandler}> {this.arrowLeft} </button>
                <article className='carousel__container'>
                    <iframe width="420" height="315" 
                    src={`https://www.youtube.com/embed/${this.state.videoId}`}>
                    </iframe> 
                </article>
                <button className='carousel__button carousel__button--right' onClick={this.rightHandler}> {this.arrowRight} </button>
            </div>
        );
    }
}

export default Carousel;