import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import AuthProvider from './pages/context/Authprovider/Authprovider';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';


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
          </Switch>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
