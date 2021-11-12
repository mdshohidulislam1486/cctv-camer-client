import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const [singleUserOrder, setSingleUserOrder] = useState()
    const {user} = useAuth()

    useEffect(()=>{
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleUserOrder(data))
    },[])

    return (
        <div>
            <h2>{singleUserOrder?.length}</h2>
            
        </div>
    );
};

export default MyOrders;