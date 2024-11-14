import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import store from "../../store/store";
import { addToCart, decreaseProduct, increaseProduct, removeFromCart } from "../../actions/cartActions";
import { useDispatch, connect, useSelector } from 'react-redux';
import Login from "../../components/Login/Login";
import LogOut from "../../components/LogOut/LogOut";
import "./styles.scss"
import { auth } from '../../firebase'
import { getAuth } from "firebase/auth";

import Button from 'react-bootstrap/Button';

const Admin = () => {
    const [auth, setAuth] = useState(getAuth());
    // const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);

    const navigate = useNavigate();
    // let cartList = useSelector(state => state.shopping.cart);
    // const dispatch = useDispatch();
    console.log(user);
    const logOutClick = (e) => {
        console.log(e.type);
        LogOut();
        setAuth(getAuth())
        setUser(auth.currentUser)

        console.log(auth);
        // navigate('/')
    }

    const logInClick = (e) => {
        console.log(e.type);
        Login();
        setAuth(getAuth())
        setUser(auth.currentUser)
        // navigate('/')
    }
    return (
        <div className="container">
            <h1 className="pageTitle">
                Admin panel
            </h1>
            
            { 
                user !== null ? 
                <div>
                    <Button className="button_logout" onClick={(e)=>logOutClick(e)}>Log out</Button>
                    <h2>Logged in: {user.email} </h2>
                </div> : <Button className="button_login" onClick={(e)=>logInClick(e)}>Log in</Button>

            }
            
        </div>
    )
}


export default Admin;