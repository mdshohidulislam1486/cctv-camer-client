import { Reviews } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

const OurReviews = () => {
   const [reviws, setReviews] = useState([])
   useEffect(()=>{
       fetch('https://damp-shelf-10750.herokuapp.com/reviews')
       .then(res => res.json())
       .then(data => setReviews(data))
   },[])
    return (
        <div>
            <h2>These are our reviews {reviws.length}</h2>
          
        </div>
    );
};

export default OurReviews;