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
import logo from '../../../images/logo.jpg'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';


const Header = () => {
    const theme = useTheme()
    const {user, logOut} =useAuth()
    const useStyle = makeStyles({
        navItem:{
            [theme.breakpoints.down('sm')]: {
                display:'none'
               }
        },
    navIcon:{
        [theme.breakpoints.up('sm')]: {
           display:'none'
          }
    }
    })

    const {navItem, navIcon} = useStyle()

    return (
    <>
    
    
    <Box sx={{ flexGrow: 1 }}>
      
        <AppBar position="static" sx={{display:'flex'}}>
        <MenuIcon
        sx={{cursor:'pointer'}}
        className={navIcon}
        />
        <Toolbar className={navItem}>
            <IconButton
            
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            
            <img width='50rem' src={logo} alt="" />
            </IconButton>
            
           
            <NavLink className={navItem}  style={{textDecoration:'none', color:"#fff"}} to='/home'> <Button color="inherit">Home</Button></NavLink>
            <NavLink className={navItem}   style={{textDecoration:'none', color:"#fff"}} to='/ourcollection'> <Button  sx={{textDecoration:"none", borderBottom:'none'}} color="inherit">Our Collection</Button></NavLink>
             {user?.email ?
                <Box>

                    <NavLink className={navItem}   style={{textDecoration:'none', color:'#fff'}} to='/orderManage'><Button color="inherit">Order Manage</Button></NavLink> 
                     
                    <Button onClick={logOut} color="inherit">Logout</Button>    
                </Box>
               : <NavLink className={navItem}   style={{textDecoration:'none', color:'#fff'}} to='/login'><Button color="inherit">Login</Button></NavLink> }
        </Toolbar>
        </AppBar>
    </Box>
    </>
    )
};

export default Header;