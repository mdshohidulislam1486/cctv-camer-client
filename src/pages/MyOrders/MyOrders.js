import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';


const MyOrders = () => {
    const [singleUserOrder, setSingleUserOrder] = useState([])
    const [individul, setIndividual] = useState([])
    const {user} = useAuth()

    useEffect(()=>{
        const url = `https://damp-shelf-10750.herokuapp.com/orders`
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
        const url = `https://damp-shelf-10750.herokuapp.com/orders/${id}`
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