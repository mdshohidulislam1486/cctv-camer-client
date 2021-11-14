import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Cctv from '../Ccctv/Cctv';



const CctvCollection = () => {

    const [cctvCol, setCctvCol] = useState([])

    useEffect(()=>{
    fetch('https://damp-shelf-10750.herokuapp.com/cctv')
    .then(res => res.json())
    .then(data => setCctvCol(data))
    },[])

    return (
            <Container sx={{pt:3, display:"flex", flexWrap:'wrap', justifyContent:"center"}} >
                {
                    cctvCol.map(mapCCtv =><Cctv key={mapCCtv.id} mapCCtv={mapCCtv}></Cctv>).slice(0 , 6)
                }
               
            </Container>
    );
};

export default CctvCollection;