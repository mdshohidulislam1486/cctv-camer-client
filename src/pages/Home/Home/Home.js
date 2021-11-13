import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import CctvCollection from '../CcctvCollection/CctvCollection';

const Home = () => {
    return (
        <div className='banner-section'>
            <Header></Header>
            <Banner></Banner>
            <CctvCollection></CctvCollection>
        </div>
    );
};

export default Home;