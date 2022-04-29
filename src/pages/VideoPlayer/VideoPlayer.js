import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';

class VideoPlayer extends Component {


    render() {
        console.log(this.props)
        return (
            <div className='videoplayer'>
                <div className='videoplayer__container'>
                    <Carousel />
                </div>
            </div>
        );
    }
}

export default VideoPlayer;