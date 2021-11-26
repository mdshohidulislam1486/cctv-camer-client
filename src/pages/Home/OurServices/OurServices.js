import { Button, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './OurServices.css'
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';




function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: 'rgba(39, 78, 227, 0.46)',
          p: 1,
          borderRadius: 1,
          textAlign: 'center',
          fontSize: '1rem',
          fontWeight: '700',
          transition:".7s ease-in-out all",
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
      PropTypes.func,
      PropTypes.object,
    ]),
  };
  

const OurServices = () => {

    
    return (
       <>
       <Container>
       <div style={{ width: '100%', paddingBottom:'20px' }}>
                    <Box>
                        <Item>
                         <Typography style={{fontWeight:700}} variant='h3' component="div">
                              Keep An Eye On Everything <br/> With Our Video Security!
                            </Typography>
                            <Typography>Not only will this reduce the probability of crime happening on your property, it will reduce or eliminate any liability that falls on you if you can show you have solid, well-designed commercial building security systems in place.</Typography>
                        </Item>
                        
                    </Box>
            </div>
        <div style={{ width: '100%' }}>
                    <Box className='grid-items'>
                        <Item className='grid-item'>Alarm Monitoring 24/7</Item>
                        <Item className='grid-item'>Security Monitoring Equipment</Item>
                        <Item className='grid-item'>Fire Monitor And Detection</Item>
                        <Item className='grid-item'> Remote Arm And Disarm</Item>
                        <Item className='grid-item'>Smart Home Controls</Item>
                        <Item className='grid-item'> Alert, Schedules, Automations </Item>
                        <Item className='grid-item'>Live Stream From Any Mobile</Item>
                        <Item className='grid-item'>Record And save Video Clips</Item>
                        <Item className='grid-item'>Life Time Rate Lock Gurantee</Item>
                        <Item className='grid-item'>Life Time Equipment Warranty</Item>
                        <Item className='grid-item'>Easy And Fair Cancellation</Item>
                        <Item className='grid-item'>Professional Grade Protection</Item>
                    </Box>
                    <Box>
                        <Typography sx={{mt:5, p:5, borderRadius:1 }} style={{backgroundColor:'rgba(39, 78, 227, 0.46)'}}>
                        For the Security and IT directors ensuring our places of work and leisure are safe. For the Chief Technology Officers shaping the smart businesses of tomorrow. We delivers powerful and insightful security solutions that enable protectors to drive forward. As the leader in home security, we can help you customize a home security system to meet your safety needs
                        </Typography>
                    </Box>
            </div>
       </Container>
        </>
    );
};

export default OurServices;

  // eslint-disable-next-line no-lone-blocks
  {/*  <Container  >
                
                  
                
                    <Grid  item xs={12} md={6}>
                    
                    </Grid>
                    <Grid  item xs={12} md={6}>
                        
                    </Grid>
                    
                </Grid>

                </Box>
            </Container> */}