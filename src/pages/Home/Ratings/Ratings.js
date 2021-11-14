import { Container, Typography } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';


const Ratings = () => {
    const location = window.location
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
       axios.post('https://damp-shelf-10750.herokuapp.com/reviews', data)
       .then(res =>{
           console.log(res)
           location.reload()
       } )
       
    };
     const {user} = useAuth()

    return (
        <div style={{marginTop:'50px'}} sx={{display:'flex', justifyContent:'center', alignItems:"center"}}>      
                <Container sx={{mb:5}}>
                <form  className='add-new' onSubmit={handleSubmit(onSubmit)}>
                <input sx={{mb:1}} defaultValue={user.displayName} {...register("name", { required: true })} />
                <textarea sx={{mb:1}} placeholder='Write your review' {...register("comment", { required: true })} />
                <input placeholder='Rate use out of 5' type="number" {...register("rating", { min: 1, max: 5 }, { required: true })} />
                <input style={{cursor:'pointer'}} type="submit" />
                </form>
                </Container>

        </div>
    );
};

export default Ratings;