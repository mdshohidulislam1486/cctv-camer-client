import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import CctvCollection from '../CcctvCollection/CctvCollection';
import OurReviews from '../OurReviews/OurReviews';
import Ratings from '../Ratings/Ratings';


const Home = () => {
    return (
        <div className='banner-section'>
            <Header></Header>
            <Banner></Banner>
            <CctvCollection></CctvCollection>
            <OurReviews></OurReviews>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;