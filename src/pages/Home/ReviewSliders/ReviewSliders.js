import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';





const ReviewSliders = ({review}) => {
 
    

    const {name, rating, comment} = review
    

    return (
    <Card sx={{ mx:2, my:5, cursor:"pointer"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Rating name="read-only" defaultValue={rating} readOnly />
        </Typography>
        <Typography variant="body2">
          {comment}
        </Typography>
      </CardContent>
      
    </Card>
    );
};

export default ReviewSliders;