import { Container } from '@mui/material';
import React, { useEffect, useReducer, useState } from 'react';
import AllOrder from '../AllOrder/AllOrder';
import Header from '../Shared/Header/Header';

const AllOrders = () => {
const [orders, setOrders] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/orders')
    .then(res => res.json())
    .then(data => setOrders(data))
},[])

// DELETE order 

const handleDelteUser = id=>{
const url = `http://localhost:5000/orders/${id}`
fetch(url, {
    method:'DELETE'
})
.then(res => res.json())
.then(data => {
    if(data.deletedCount>0){
        alert('Order Deleted')
        const reamainingUser = orders.filter(order => order._id !== id)
        setOrders(reamainingUser)
    }
 
    
})
}

    return (
        <>
        <Header></Header>
        <Container sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {
            orders.map(order =><AllOrder key={order._id}
            order={order}
            handleDelteUser={()=>handleDelteUser(order._id)}
            ></AllOrder>)
            }
        </Container>
        </>
    );
};

export default AllOrders;