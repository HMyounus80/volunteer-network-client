import React, { createContext, useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import Login from './Components/Login/Login';
import Events from './Components/Events/Events';
import Admin from './Components/Admin/Admin';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login"> 
              <Login/>
          </Route>

          <PrivateRoute path="/register/:taskId">
              <RegisterForm/>
          </PrivateRoute>

          
          <PrivateRoute path="/registrationList">
              <Events/>
          </PrivateRoute>


          <PrivateRoute path="/admin">
              <Admin/>
          </PrivateRoute>

           <Route path="/events">
              <Events/>
             </Route>


          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
