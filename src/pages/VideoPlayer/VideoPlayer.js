import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';

class VideoPlayer extends Component {
    render() {
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