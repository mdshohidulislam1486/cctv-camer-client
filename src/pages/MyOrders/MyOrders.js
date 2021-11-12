import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import Header from '../Shared/Header/Header';

const MyOrders = () => {
    const [singleUserOrder, setSingleUserOrder] = useState([])
    const [individul, setIndividual] = useState([])
    const {user} = useAuth()

    useEffect(()=>{
        const url = `http://localhost:5000/orders`
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleUserOrder(data))
    },[])
    const myEmail = user.email

    useEffect(()=>{
        const individulaUser = singleUserOrder.filter(myBooking => myBooking.email === myEmail)
        setIndividual(individulaUser)
    },[singleUserOrder])

    const handleDelteUser = id=>{
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                alert('Order Deleted')
                const reamainingUser = individul.filter(order => order._id !== id)
                setIndividual(reamainingUser)
            }
         
            
        })
        }
        

    return (
        <>
        <Container sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {
                individul.map(singleUserOrd =><MyOrder 
                key={singleUserOrd._id}
                singleUserOrd={singleUserOrd}
                handleDelteUser={()=>handleDelteUser(singleUserOrd._id)}
                >

                </MyOrder>)
            }
            
        </Container>
        
        </>
    );
};

export default MyOrders;