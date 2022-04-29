import React from 'react';
import {v4} from 'uuid';
import './TransportOption.scss';

function TransportOption(props) {

    const transports = [`walk`, `bike`]
    
    return (
        <div className='transport'>
            <h1 className='transport__title'>How would you like to wander today?</h1>
            <div className='transport__button-container'>
                <ul>
                    {transports.map((transport)=>{
                        return <button className='transport__button' key={v4()} ><li>{transport}</li></button>
                    })}
                </ul>
            </div>
            
        </div>
    );
}

export default TransportOption;