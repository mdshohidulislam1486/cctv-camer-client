import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import logo from '../../../images/logo.jpg'


const Footer = () => {
    return (
        <Box>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:{xs:"column", sm:'row'}}}>
                <Typography variant='h4' sx={{fontWeight:'700'}}>
                    Let's Explore 
                </Typography>
                <img style={{width:'10rem'}} src={logo} alt="" />
                <Typography variant='h4' sx={{fontWeight:'700'}}>More about us</Typography>
            </Box>
            <Box  sx={{ bgcolor:'#263238', pt:2}} >
            <Container sx={{display:{md:"flex"}, justifyContent:'space-between', flexWrap:'wrap', flexDirection:{md:'row'}}}>
            <div >
                <p>Contact</p>
                <p>PHone: 2332432432</p>
                <p>Email:cmer@cct.com</p>
            </div>
            <div>
               <h5> Security Solution</h5>
            </div>
            <div>
                <p>Address</p>
                <p>240/12 East kafrul, Dhaka, 1216</p>
                <p>Open EveryDay</p>

            </div>
            </Container>
          </Box>
        </Box>
    );
};

export default Footer;