import {  Button } from '@mui/material';
import React from 'react';
import './Banner.css'
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  {
    url:'https://www.gms-group.co.uk/wp-content/uploads/2018/01/CCTV-Page-Header.jpg',
    caption: 'Our vision is to make your home secure'
  },
  {
    url: 'https://www.rockslocks.com/wp-content/uploads/2019/09/cctv_header.jpg',
    caption: 'We provide you an ultimate solution for your home security'
  },
  {
    url: 'https://images.prismic.io/kasasmart/0c40ca844b55c5c575d30ac8c6160dfc623639f6_kc200-hero-product-banner.jpg?auto=compress,format',
    caption: 'Now you can watch your home from office'
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

