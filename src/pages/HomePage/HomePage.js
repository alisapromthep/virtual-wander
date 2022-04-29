import React from 'react';
import './HomePage.scss';
import CityOption from '../../components/CityOption/CityOption';
import TransportOption from '../../components/TransportOption/TransportOption';

function HomePage(props) {
    return (
        <main>
            <div className='option__container'>
                <CityOption/>
                <TransportOption />
            </div>
        </main>
    );
}

export default HomePage;