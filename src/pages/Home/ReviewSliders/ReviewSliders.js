import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';





const ReviewSliders = ({review}) => {
 
    

    const {name, rating} = review
    const [value, setValue] = React.useState(rating);

    return (
    <Card sx={{ minWidth: 275, mx:2, my:2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Rating name="read-only" value={value} readOnly />
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      
    </Card>
    );
};

export default ReviewSliders;