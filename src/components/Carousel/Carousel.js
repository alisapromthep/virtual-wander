import React from 'react';
import './Carousel.scss';

function Carousel(props) {

    const arrowLeft = `<`;
    const arrowRight = `>`;

    const videoArray = [`VideoOne`, `VideoTwo`, `VideoThree`]

    const image = "https://i.imgur.com/7rD6Mf6.jpg"


    return (
        <div className='carousel'>
            <button className='carousel__button carousel__button--left'> {arrowLeft} </button>
            <article className='carousel__container'>
                <ul>
                    <img src={image} />
                    {/* {videoArray.map((video)=>{
                        return <li><video className='carousel__video' poster={image}></video></li>
                    })} */}
                </ul>
            </article>
            <button className='carousel__button carousel__button--right'> {arrowRight} </button>
            

            
        </div>
    );
}

export default Carousel;