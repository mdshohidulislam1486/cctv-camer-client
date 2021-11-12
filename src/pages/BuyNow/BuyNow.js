import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../hooks/useAuth';




const BuyNow = () => {
   

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/orders', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Your booking is confirmed')
                reset()
            }
        console.log(res)
        })
        
    }; 

    let {id} = useParams();
    const [order, setOrder] = useState()
    const [currentOrders, setCurrentOrder] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/cctv')
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])

    useEffect(()=>{
        const currentOrder = order?.find(myOrder=>myOrder.id === id)
        setCurrentOrder(currentOrder)
    }, [order])
    const {user} = useAuth()

    return (
    <Container sx={{pt:5, display:"flex", justifyContent:'center', alignItems:'center'}}>
        <Card sx={{ maxWidth: 500, border: 0, boxShadow:0}}>
            <CardMedia
            component="img"
            height="350"
            image={currentOrders?.img}
            alt="green iguana"
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
        <form  onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user?.displayName} {...register("name")} />
                <input defaultValue={user?.email} {...register("email")} />
                <input placeholder="Billing Address" type='text' {...register("address")} required />
                <input placeholder="Enter Phone number" type="number" {...register("phonenumber")} required />
    
                <input placeholder='Please enter the product name' type='text' {...register("package")}  required/>
                <div><input placeholder="" type="submit" /></div>
            </form>
    </Container>
    );
};

export default BuyNow;