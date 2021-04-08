import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'


const Login = () => {
  const {loggedInUser, setLoggedInUser} = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };
  
  
  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
  }
    

    const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
  
    var {displayName, email} = result.user;
    const signedInUser = {name: displayName, email}
    setLoggedInUser(signedInUser)
    history.replace(from);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    return (
        
        <div className="login-area">
            <h1>Please Login and then go to your destination</h1>
            <button className="login-button" onClick={handleGoogleSignIn}>Continue with Google Sign In</button>

        </div>
    );
};

export default Login;