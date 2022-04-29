import Carousel from '../../components/Carousel/Carousel';

function VideoPlayer({videoArray}) {


        return (
            <div className='videoplayer'>
                <div className='videoplayer__container'>
                    <Carousel videoArray={videoArray}/>
                </div>
            </div>
        );
    }


export default VideoPlayer;