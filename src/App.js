import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import AuthProvider from './pages/context/Authprovider/Authprovider';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import BuyNow from './pages/BuyNow/BuyNow';
import AllOrders from './pages/AllOrders/AllOrders';


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
            <Route  path='/allorder'>
              <AllOrders></AllOrders>
            </Route>
            <Route exact path='/buynow/:id'>
              <BuyNow></BuyNow>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
