import React from 'react';
import './HomePage.scss';


function HomePage({submitHandler}) {
    
    const onSubmit = (event)=>{
        
        submitHandler(event);
    }

    return (
        <main>
            <div className='option__container'>
                <form onSubmit={onSubmit} className="form">
                <label htmlFor='city' className="padding"> Where to today?</label>
                <select id='city' name='city' className="padding">
                    <option value='NYC'>NYC</option>
                    <option value='Amsterdam'>Amsterdam</option>
                    <option value='Tokyo'>Tokyo</option>
                </select>
                <label htmlFor='transport' className="padding"> How would you like to wander today?</label>
                <select id='transport' name='transport' className="padding">
                    <option value='walk'>walk</option>
                    <option value='bike'>bike</option>
                </select>
                <button type='submit'>Start journey</button>
                </form>
            </div>
        </main>
    );
}

export default HomePage;