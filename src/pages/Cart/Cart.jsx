import React from "react";
// import store from "../../store/store";
// import { addToCart, decreaseProduct, increaseProduct, removeFromCart } from "../../actions/cartActions";
import { useDispatch, useSelector } from 'react-redux';
import ListGroup from "react-bootstrap/ListGroup";
import ProductLine from "../../components/ProductLine/ProductLine";
import "./styles.scss"

const Cart = () => {
    let cartList = useSelector(state => state.shopping.cart);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <h1 className="pageTitle">
                Your cart
            </h1>
            <ListGroup as="ol" numbered>

                {
                    cartList.map((item, i) => {
                        return (
                            <ProductLine key={i} item={item}/>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}


export default Cart;