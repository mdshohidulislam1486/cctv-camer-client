import React from 'react';
import { Box, Container } from '@mui/material';
import { flexbox } from '@mui/system';
import { blue} from '@mui/material/colors';

const Footer = () => {
    return (
        <div>
            <Box  sx={{ bgcolor: blue[500], pt:2}} >
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
        </div>
    );
};

export default Footer;