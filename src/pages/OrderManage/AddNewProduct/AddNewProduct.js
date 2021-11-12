import { Container } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewProudct.css'


const AddNewProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => {
        axios.post('https://damp-shelf-10750.herokuapp.com/cctv', data)
        .then(res =>{
            console.log(res)
        } )
     };

    return (
    <Container sx={{display:'flex', justifyContent:'center'}}>
        <form className="add-new" onSubmit={handleSubmit(onSubmit)}>
           
            <input placeholder="Enter name" {...register("name")} />
            <br/>
            <input placeholder="Unique id" {...register("id")} />
            <br/>
            <textarea placeholder="Description" {...register("description")} />
            <br/>
            <input placeholder="Price" {...register("price")} />
            <br/>
            <input placeholder="Image url" {...register("img")} />
            <br/>

            
            <input type="submit" />
        </form>
    </Container>
    );
};

export default AddNewProduct;