import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {

  Switch,
  Route,
  useRouteMatch,
  NavLink
} from "react-router-dom";
import { Button, Divider } from '@mui/material';
import MyOrders from '../../MyOrders/MyOrders';
import AllOrders from '../../AllOrders/AllOrders';
import MakeAdmin from '../../MakdeAdmin/MakeAdmin';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import useAuth from '../../hooks/useAuth';
import Payment from '../Payment/Payment';


 
const drawerWidth = 240;

function OrderManage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin} = useAuth()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      
      <NavLink sx={{display:'inline-block', textDecoration:"none"}} to='/Home'> <Button>Home</Button></NavLink>
      <Divider/>
      <NavLink  sx={{display:'inline-block'}} to={`${url}`}> <Button >My Order</Button></NavLink> 
      <Divider/> 
      <NavLink  sx={{display:'block'}} to={`${url}/payment`}> <Button >Make Payment </Button></NavLink> 
      <Divider/> 
      
      {admin && <Box>
        <NavLink  sx={{display:'block'}} to={`${url}/allorder`}> <Button >All orders</Button></NavLink> 
        <Divider/>
        <NavLink  sx={{display:'block'}} to={`${url}/makeAdmin`}> <Button >Make An Admin</Button></NavLink> 
      <Divider/>
      <NavLink  sx={{display:'block'}} to={`${url}/addservice`}> <Button >Add a new product</Button></NavLink></Box> }
     
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', minHeight:'100vh' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Order Manage
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch >
          <Route exact path={path}>
            <MyOrders></MyOrders>
          </Route>
          <Route  path={`${path}/allorder`}>
            <AllOrders></AllOrders>
          </Route>
          <Route  path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route  path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route  path={`${path}/addservice`}>
            <AddNewProduct></AddNewProduct>
          </Route>
        </Switch>
       
      </Box>
    </Box>
  );
}

OrderManage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default OrderManage;
