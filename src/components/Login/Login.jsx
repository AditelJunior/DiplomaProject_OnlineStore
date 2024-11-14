import React, {useState} from 'react';
// import { addToCart, removeFromCart, decreaseProduct } from "../../actions/cartActions";
// import { useDispatch } from 'react-redux';
import "./styles.scss";
// import Button from "react-bootstrap/Button";
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import InputGroup from 'react-bootstrap/InputGroup';
// import { Link } from "react-router-dom";

// import { useNavigate } from 'react-router-dom'

// import {  signInWithEmailAndPassword   } from 'firebase/auth';
// import { auth } from '../../firebase'
import { signInWithGooglePopup } from "../../firebase"

const Login = (props) => {

//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
       
//     const onLogin = (e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             // navigate("/home")
//             console.log(user);
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage)
//         });
       
//     }
 
//   return (
//     <div className="login_section">
//         <Form className="login_form">
//             <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
//                 <Form.Label column sm="3">
//                 Email
//                 </Form.Label>
//                 <Col sm="9">
//                     <Form.Control  defaultValue="Email" onChange={(e)=>setEmail(e.target.value)}/>
//                 </Col>
//             </Form.Group>

//             <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
//                 <Form.Label column sm="3">
//                 Password
//                 </Form.Label>
//                 <Col sm="9">
//                     <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
//                 </Col>
//             </Form.Group>
//             <Button variant="dark" onClick={onLogin}>Login</Button>
//         </Form>
//     </div>
//   );
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    logGoogleUser()
    // return (
        // <div>
        //     <button onClick={logGoogleUser}>Sign In With Google</button>
        // </div>
    // )
};

export default Login;
