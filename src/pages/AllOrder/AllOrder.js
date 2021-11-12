import { Container } from '@mui/material';
import React from 'react';
import './AllOrder.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const AllOrder = ({order, handleDelteUser}) => {
const {name, address, createdAt, camera} = order

    return (
    <Card sx={{ minWidth: 275, m:2}}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {camera}
            </Typography>
            <Typography variant="h5" component="div">
                {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {address}
            </Typography>
            <Typography variant="body2">
            {createdAt}
            <br />
            {'"Will delivered within nex 5 working day"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={handleDelteUser} variant="contained" size="small">Delete</Button>
        </CardActions>
    </Card>
    );
};

export default AllOrder;