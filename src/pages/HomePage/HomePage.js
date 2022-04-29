import React from 'react';
import './HomePage.scss';


function HomePage(props) {
    
    const submitHandler = (event)=>{
        event.preventDefault();

        console.log(event.target.city.value)
        console.log(event.target.transport.value)

    }

    return (
        <main>
            <div className='option__container'>
                <form onSubmit={submitHandler}>
                <label htmlFor='city'> Where to today?</label>
                <select id='city' name='city'>
                    <option value='NYC'>NYC</option>
                    <option value='Amsterdam'>Amsterdam</option>
                    <option value='Tokyo'>Tokyo</option>
                </select>
                <label htmlFor='transport'> How would you like to wander today?</label>
                <select id='transport' name='transport'>
                    <option value='walk'>walk</option>
                    <option value='bike'>bike</option>
                </select>
                <button type='submit'>Start the journey</button>
                </form>
            </div>
        </main>
    );
}

export default HomePage;