import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AllOrder from '../AllOrder/AllOrder';


const AllOrders = () => {
const [orders, setOrders] = useState([])

useEffect(()=>{
    fetch('https://damp-shelf-10750.herokuapp.com/orders')
    .then(res => res.json())
    .then(data => setOrders(data))
},[])

// DELETE order 

const handleDelteUser = id=>{
const url = `https://damp-shelf-10750.herokuapp.com/orders/${id}`
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