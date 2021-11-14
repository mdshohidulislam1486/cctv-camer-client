import { Container, Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css'
import bannerImg from '../../../images/banner-img.png'
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  {
    url:'https://thumbs.dreamstime.com/b/surveillance-cctv-security-camera-isolated-white-background-209300049.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://media.istockphoto.com/photos/cctv-camera-video-security-with-space-on-blue-background-cctv-camera-picture-id1198426126?k=20&m=1198426126&s=170667a&w=0&h=J2FTxty6iH2L_EvGR1qa2qeuU2xBjZUmdCVC9-NXAhQ=',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.prismic.io/kasasmart/0c40ca844b55c5c575d30ac8c6160dfc623639f6_kc200-hero-product-banner.jpg?auto=compress,format',
    caption: 'Slide 3'
  },
];



const Banner = () => {
    return (
      <div className="slide-container">
      <Slide>
       {slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              <div>{slideImage.caption}</div>
              <NavLink style={{textDecoration:"none", marginTop:'1em'}} to="/ourcollection" ><Button variant='contained'>View Our Collection</Button></NavLink>
            </div>
          </div>
        ))} 
      </Slide>
    </div>
    
    );
};

export default Banner;

{/* <Box sx={{ width: '100%' }}>
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
    </Box> */}