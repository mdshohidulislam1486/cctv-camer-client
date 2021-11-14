import React, { useEffect, useState } from 'react';
import ReviewSliders from '../ReviewSliders/ReviewSliders';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OurReviews = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

   const [reviws, setReviews] = useState([])
   useEffect(()=>{
       fetch('https://damp-shelf-10750.herokuapp.com/reviews')
       .then(res => res.json())
       .then(data => setReviews(data))
   },[])
    return (
        <div className="App">
             <h2>Your review help us to spread our message </h2>
            <Slider {...settings} sx={{display:'flex'}}>
                {
                    reviws.map(review =><ReviewSliders key={review._id} review={review}></ReviewSliders>)
                }
            </Slider>
          
        </div>
    );
};

export default OurReviews;