import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import AuthProvider from './pages/context/Authprovider/Authprovider';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import BuyNow from './pages/BuyNow/BuyNow';
import AllOrders from './pages/AllOrders/AllOrders';
import PriavateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './pages/MyOrders/MyOrders';
import OrderManage from './pages/OrderManage/OrderManage/OrderManage';
import OurCollections from './pages/OurCollections/OurCollections';
import Footer from './pages/Shared/Footer/Footer';


function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route  path='/home'>
              <Home></Home>
            </Route>
            <Route  path='/login'>
              <Login></Login>
            </Route>
            <Route  path='/register'>
              <Register></Register>
            </Route>
            <Route  path='/ourcollection'>
              <OurCollections></OurCollections>
            </Route>
            <PriavateRoute  path='/allorder'>
              <AllOrders></AllOrders>
            </PriavateRoute>
            <PriavateRoute  path='/myorder'>
              <MyOrders></MyOrders>
            </PriavateRoute>
            <PriavateRoute  path='/orderManage'>
              <OrderManage></OrderManage>
            </PriavateRoute>

            <PriavateRoute exact path='/buynow/:id'>
              <BuyNow></BuyNow>
            </PriavateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
