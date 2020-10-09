import React, { useContext } from 'react';
import './login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../logos/google.png';
import Header from '../Header/Header';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    
    const handleGoogleSignIn = () => {
        const Googleprovider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(Googleprovider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
    
            }).catch(function(error) {
            var errorMessage = error.message;
                console.log(errorMessage)
                var email = error.email;
                console.log(email);
            });
        
        }
    return (
        <div className="container">
        <Header></Header>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 mt-5 p-4" >

                <h2 className="text-center mb-2">This is a login</h2>
                <button onClick={handleGoogleSignIn} class="btn btn-lg btn-block login-btn"> <img className="login-img" src={google} alt=""/> Continue With Google</button>
      
            </div>
            <div className="col-md-3"></div>
        </div>
        </div>
        
    );
};

export default Login;