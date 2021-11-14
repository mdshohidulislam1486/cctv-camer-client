import { Button, Container, Typography } from '@mui/material';
import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import './OurServices.css'
import { NavLink } from 'react-router-dom';

const OurServices = () => {
    return (
        <div className='custom-grid' style={{marginTop:"2em", display:'flex', justifyContent:"center", alignItems:'center'}}>
            <Container  >
                <Box style={{padding:"10px"}}>
                <Grid  container spacing={2}>
                    <Grid item xs={12} md={8}>
                            <Typography style={{fontWeight:700}} variant='h3' component="div">
                              Keep An Eye On Everything <br/> With Our Video Security!
                            </Typography>
                            <Typography>Not only will this reduce the probability of crime happening on your property, it will reduce or eliminate any liability that falls on you if you can show you have solid, well-designed commercial building security systems in place.</Typography>
                    </Grid>
                    <Grid  item xs={0} md={4}>
                        
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                        Alarm Monitoring 24/7
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                        Security Monitoring Equipment
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                        Fire Monitor And Detection
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                        Remote Arm And Disarm
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                        Smart Home Controls
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                        Live Stream From Any Mobile
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                        Alert, Schedules, Automations 
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                        Record And save Video Clips
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                       Life Time Rate Lock Gurantee
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                        Life Time Equipment Warranty
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                        Easy And Fair Cancellation
                    </Grid>
                    <Grid className='grid-item' item xs={12} md={4}>
                        Professional Grade Protection
                    </Grid>
                    <Grid  item xs={12} md={6}>
                    For the Security and IT directors ensuring our places of work and leisure are safe. For the Chief Technology Officers shaping the smart businesses of tomorrow. We delivers powerful and insightful security solutions that enable protectors to drive forward. As the leader in home security, we can help you customize a home security system to meet your safety needs
                    </Grid>
                    <Grid  item xs={12} md={6}>
                        <NavLink style={{textDecoration:'none'}} to='/ourcollection'><Button>View Our Services</Button></NavLink>
                    </Grid>
                    
                </Grid>

                </Box>
            </Container>
        </div>
    );
};

export default OurServices;