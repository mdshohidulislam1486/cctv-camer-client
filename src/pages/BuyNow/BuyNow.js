import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import Header from '../Shared/Header/Header';




const BuyNow = () => {
   

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://damp-shelf-10750.herokuapp.com/orders', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Your order is confirmed')
                reset()
            }
        console.log(res)
        })
        
    }; 
    const {user} = useAuth()
    let {id} = useParams();
    const [order, setOrder] = useState()
    const [currentOrders, setCurrentOrder] = useState([])

    useEffect(()=>{
        fetch('https://damp-shelf-10750.herokuapp.com/cctv')
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])

    useEffect(()=>{
        const currentOrder = order?.find(myOrder=>myOrder.id === id)
        setCurrentOrder(currentOrder)
    }, [order])
    

    return (
    <>
    <Header></Header>
    <Container sx={{mt:5}}>
        <Grid container spacing={2} >
            <Grid item md={6} sm={12}>
                <Card sx={{ maxWidth: 500, border: 0, boxShadow:0}}>
                    <CardMedia
                    component="img"
                    height="350"
                    image={currentOrders?.img}
                    alt="camera img"
                    />
                    <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {currentOrders?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {currentOrders?.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">Share</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={6} xs={12}>
                <Typography variant='h4' style={{color:'blue', paddingBottom:"10px"}}>Order before we get out of stock!!</Typography>
                <form className='add-new' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true })}/>
                <input defaultValue={user.email} {...register("email") } />
                <input placeholder="Billing Address" type='text' {...register("address")} required />
                <input placeholder="Enter Phone number" type="number" {...register("phonenumber")} required />
    
                <input defaultValue={currentOrders?.name} type='text' {...register("camera", { required: true })} />
                <div><input placeholder="" type="submit" /></div>
                </form>
            </Grid>
    </Grid>
    </Container>
    </>
    );
};

export default BuyNow;