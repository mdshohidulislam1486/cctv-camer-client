import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import logo from '../../../images/logo.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
                        
                        


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
            <Container sx={{display:{md:"flex"}, justifyContent:'space-between', flexWrap:'wrap', flexDirection:{md:'row'}, alignItems:'center'}}>
                <Box >
                    <Typography variant='h6' sx={{fontFamily:'cursive', color:"#808080"}}>
                        TopRated
                    </Typography>
                    <Typography variant='body2' color='#808080'>
                        Security Solution
                    </Typography>
                    <Box sx={{cursor:'pointer'}}>
                        <TwitterIcon  sx={{color:'#808080'}}></TwitterIcon>
                        <FacebookIcon sx={{color:'#808080'}} ></FacebookIcon>
                        <LinkedInIcon sx={{color:'#808080'}} ></LinkedInIcon>
                        <YouTubeIcon  sx={{color:'#808080'}} > </YouTubeIcon>
                    </Box>
                    <Typography color="red">info@ssolution.com</Typography>
                </Box>
                <Box>
                    <Typography variant='h6' sx={{ color:'#808080', fontFamily:'cursive'}}>
                        Our Service Area
                    </Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <ChangeCircleIcon sx={{mr:".8rem", color:'#808080'}}></ChangeCircleIcon>
                        <Typography variant='body2' sx={{ color:'#808080'}}>Home Solution</Typography>
                       
                    </Box>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <ChangeCircleIcon sx={{mr:".8rem", color:'#808080'}}></ChangeCircleIcon>
                        <Typography variant='body2' sx={{ color:'#808080'}}> Public Property management </Typography>
                    </Box>
                    <Box sx={{display:'flex',alignItems:'center'}}> 
                        <ChangeCircleIcon sx={{mr:".8rem", color:'#808080'}}></ChangeCircleIcon>
                        <Typography variant='body2' sx={{ color:'#808080'}}> Private Property </Typography>
                    
                    </Box>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <ChangeCircleIcon sx={{mr:".8rem", color:'#808080'}}></ChangeCircleIcon>
                        <Typography variant='body2' sx={{ color:'#808080'}}>Corporete 24/7 support</Typography>
                    </Box>

                </Box>
                <Box>
                   <Box sx={{display:'flex', alignItems:'center', maxWidth:'25em'}}>
                       <ViewComfyIcon sx={{mr:".8rem", color:'#808080'}}></ViewComfyIcon>
                       <Typography variant='body2' color="#808080">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, dolorum!</Typography>
                   </Box>
                   <Box sx={{display:'flex', alignItems:'center', maxWidth:'25em'}}>
                       <ViewComfyIcon  sx={{mr:".8rem", color:'#808080'}}></ViewComfyIcon>
                       <Typography  variant='body2' color="#808080">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, dolorum!</Typography>
                   </Box>
                   <Box sx={{display:'flex', alignItems:'center', maxWidth:'25em'}}>
                       <ViewComfyIcon sx={{mr:".8rem", color:'#808080'}}></ViewComfyIcon>
                       <Typography variant='body2' color="#808080">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, dolorum!</Typography>
                   </Box>
                   

                </Box>
            </Container>
          </Box>
        </Box>
    );
};

export default Footer;