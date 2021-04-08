import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvents from "./components/AddEvents/AddEvents";
import CheckOut from "./components/CheckOut/CheckOut";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import './App.css'

 export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [checkOut, setCheckOut] = useState({})
  const [orders, setOrders] = useState({})
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, checkOut, setCheckOut, orders, setOrders}}>
    <p>Name:{loggedInUser.name}</p>
    <Router>
    <div>
      <ul>
        <div className="navBarDiv">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
         </li>
       
         <li>
          <Link to="/addEvents">Admin</Link>
         </li>
         
         <li>
          <Link to="/checkOut">Check Out</Link>
         </li>
         <li>
          <Link to="/orders">Orders</Link>
         </li>
         <li>
          <Link to="/manageProduct">Manage Product</Link>
         </li>
         </div>
      </ul>
      <h1>Electronics Shop</h1>
      <hr />

   
      <Switch>
      <Route path="/home">
          <Home />
        </Route>
        
        <PrivateRoute path="/addEvents">
          <AddEvents />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/checkOut">
          <CheckOut />
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders />
        </PrivateRoute>
        <PrivateRoute path="/manageProduct">
          <ManageProduct />
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  </UserContext.Provider>

  );
}

export default App;
