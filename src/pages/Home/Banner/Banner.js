import { Container, Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css'
import bannerImg from '../../../images/banner-img.png'
import { NavLink } from 'react-router-dom';



const Banner = () => {
    return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={6} xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center' }}>
        <Container  >
            <div>
                <Typography style={{color:"#0158"}} variant="h3"  >Your safety is our first piority </Typography>
                <Typography variant="h6" style={{color:"rgba(0,0,0, .9)"}}>Closed Circuit Television (CCTV) is a system in which all elements – from the cameras to the recording devices – are directly connected in order to keep the video from bein </Typography>
                <NavLink style={{textDecoration:"none"}} to="/ourcollection" ><Button variant='contained'>View Our Collection</Button></NavLink>

            </div>
        </Container>
        </Grid>
        <Grid  item md={6} xs={12}>
            <img  style={{width:'100%'}} src={bannerImg} alt="" />
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default Banner;