import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Cctv = ({mapCCtv}) => {
    const {name, img, description} = mapCCtv
    return (
    <Card sx={{ maxWidth: 345, m:2 }}>
        <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description.slice(0, 150)}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <NavLink  to={`/buynow/${mapCCtv.id}`} ><Button size="small">Buy Now</Button></NavLink>
        </CardActions>
    </Card>
    );
};

export default Cctv;