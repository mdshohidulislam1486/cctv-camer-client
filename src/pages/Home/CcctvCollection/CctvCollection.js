import React, { useEffect, useState } from 'react';
import { Container, TextField } from '@mui/material';
import Cctv from '../Ccctv/Cctv';
import { display } from '@mui/system';


const CctvCollection = () => {

    const [cctvCol, setCctvCol] = useState([])

    useEffect(()=>{
    fetch('http://localhost:5000/cctv')
    .then(res => res.json())
    .then(data => setCctvCol(data))
    },[])

    return (
            <Container sx={{pt:3, display:"flex", flexWrap:'wrap', justifyContent:"center"}} >
                {
                    cctvCol.map(mapCCtv =><Cctv key={mapCCtv.id} mapCCtv={mapCCtv}></Cctv>).slice(0, 6)
                }
               
            </Container>
    );
};

export default CctvCollection;