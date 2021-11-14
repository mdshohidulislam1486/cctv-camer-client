import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const {user, logOut} =useAuth()
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        
            </Typography>
            <NavLink  style={{textDecoration:'none', color:"#fff"}} to='/home'> <Button color="inherit">Home</Button></NavLink>
            <NavLink style={{textDecoration:'none', color:"#fff"}} to='/ourcollection'> <Button s sx={{textDecoration:"none", borderBottom:'none'}} color="inherit">Our Collection</Button></NavLink>
             {user?.email ?
                <Box>
                    
                    
                    <NavLink style={{textDecoration:'none', color:'#fff'}} to='/orderManage'><Button color="inherit">Order Manage</Button></NavLink> 
                     
                    <Button onClick={logOut} color="inherit">Logout</Button>    
                </Box>
               : <NavLink style={{textDecoration:'none', color:'#fff'}} to='/login'><Button color="inherit">Login</Button></NavLink> }
        </Toolbar>
        </AppBar>
    </Box>
    )
};

export default Header;