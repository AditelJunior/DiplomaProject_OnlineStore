import React from 'react';

import { getAuth, signOut } from "firebase/auth";

const LogOut = (props) => {
    if (getAuth!==null) {
        signOut(getAuth()).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    } else {
        console.log("already logged out")
    }
   
};
export default LogOut;
