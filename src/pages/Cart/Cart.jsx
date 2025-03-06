import React, {useEffect, useState} from "react";
import { clearCartList } from "../../actions/productsActions";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ProductLine from "../../components/ProductLine/ProductLine";
import "./styles.scss"

const Cart = () => {
    const cartList = useSelector(state => state.cart.cartProducts) || [];

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        cartList.forEach(item => {
            total += item.price * item.quantity;
        })
        setTotalPrice(total);
    }, [cartList])
    return (
        <div className="container cart_container">
            <h1 className="pageTitle">
                Košík
            </h1>
            <ListGroup as="ol" numbered>
                {
                    cartList.map((item, i) => {
                        return (
                            <ProductLine key={i} item={item} index={i}/>
                        )
                    })
                }
            </ListGroup>
            <span className="total_price">Celkem: {totalPrice} Kč</span>
            <div className="cart_buttons">
                <div>
                    <button className="btn btn-danger" onClick={(e)=> dispatch(clearCartList())}>Vyčistit košík</button>
                </div>
                <div>
                    <button className="btn btn-dark" onClick={(e)=> navigate('/payment')}>Dokončit nákup</button>
                </div>
            </div>
        </div>
    )
}


export default Cart;