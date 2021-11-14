import React from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import CctvCollection from '../CcctvCollection/CctvCollection';
import OurReviews from '../OurReviews/OurReviews';
import Ratings from '../Ratings/Ratings';


const Home = () => {
    const {user}= useAuth()
    return (
        <div className='banner-section'>
            <Header></Header>
            <Banner></Banner>
            <CctvCollection></CctvCollection>
            <OurReviews></OurReviews>
            {user.email && <Ratings></Ratings>}
        </div>
    );
};

export default Home;