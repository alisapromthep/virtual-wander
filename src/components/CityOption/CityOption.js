import React from 'react';
import './CityOption.scss';
import {v4} from 'uuid';


function CityOption(props) {
    const cities = ['New York', 'Amsterdam', 'Tokyo']

    return (
        <div className='city'>
            <h1 className='city__title'>Where to today?</h1>
            <div className='city__button-container'>
                <ul>
                    {cities.map((city)=>{
                        return <button className='city__button' key={v4()}><li>{city}</li></button>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default CityOption;