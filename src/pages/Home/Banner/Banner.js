import {  Button, Box, Typography, Container } from '@mui/material';
import React from 'react';
import './Banner.css'
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  {
    url:'https://i.ibb.co/jz8ZDvP/Introducing-my-collection-of-Black-Artistic-Backgrounds-Black-is-always-trendy-and-looking-solid-ric.jpg',
    caption: 'Our vision is to make your home secure',
    img:'https://i.ibb.co/3s53LM6/bannerimg-1.jpg'
  },
  {
    url: 'https://i.ibb.co/FKVVpr9/banner2.jpg',
    caption: 'We provide you an ultimate solution for your home security',
    img:'https://i.ibb.co/wzsmX3X/bannerimg-2.jpg'
  },
  {
    url: 'https://i.ibb.co/bmqdHQ9/banner3.jpg',
    caption: 'Now you can watch your home from office',
    img:'https://i.ibb.co/1QPys9r/bannerimg-3.jpg'
  },
];



const Banner = () => {
    return (
      <div className="">
      <Slide>
       {slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
           <Box sx={{'backgroundImage': `url(${slideImage.url})`}}>
              <Container sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:{sm:'center', md:'space-between'}, alignItems:'center'}}>
              <Box >
              <Typography>{slideImage.caption}</Typography>
              <NavLink style={{textDecoration:"none", marginTop:'1em'}} to="/ourcollection" ><Button variant='contained'>View Our Collection</Button></NavLink>
              </Box>
              <Box>
                  <img style={{width:'30rem', borderRadius:"1rem"}} src={slideImage.img} alt="banner-img" />
              </Box>
              </Container>
              
            </Box>
          
          </div>
        ))} 
      </Slide>
    </div>
    
    );
};

export default Banner;

