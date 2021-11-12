import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import OurCollection from '../OurCollection/OurCollection';
import Header from '../Shared/Header/Header';

const OurCollections = () => {
   const [collection, setCollection]= useState([])


   useEffect(()=>{
    fetch('https://damp-shelf-10750.herokuapp.com/cctv')
    .then(res => res.json())
    .then(data => setCollection(data))
    },[])

    return (
        <>
        <Header></Header>
        <Container sx={{pt:3, display:"flex", flexWrap:'wrap', justifyContent:"center"}} >
             
                {
                    collection.map(mapCCtv => <OurCollection key={mapCCtv._id} mapCCtv={mapCCtv}></OurCollection>)
                }
        </Container>
        </>
    );
};

export default OurCollections;