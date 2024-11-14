import React from "react";
// import { addToCart, removeFromCart, decreaseProduct } from "../../actions/cartActions";
// import { useDispatch } from 'react-redux';
import "./styles.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Placeholder from "../../assets/images/placeholder.jpg";
const ProductCard = (props) => {
    const item = props.item;
    // const dispatch = useDispatch();
    // const addToCartButtonClick = (e) => {
    //     e.preventDefault();
    //     dispatch(addToCart(item))
    // }
    return (
        <li className="product">
            <Link to={`/${props.mainCategory}/${props.categoryId}/${props.number}`}>
                <Card>
                    
                <Card.Img className="product_image" variant="top" src={item.image ? item.image : Placeholder} />
                <Card.Body>
                    <Card.Title className="product_title">{item.title}</Card.Title>
                    <Card.Subtitle className="product_subtitle mb-2 text-muted"><b>{item.price}$</b></Card.Subtitle>
                    
                    {/* <Button onClick={event=>addToCartButtonClick(event)} className="product_buy_button btn btn-danger">Add To Cart</Button> */}
                </Card.Body>
                </Card>   
            </Link>
        </li>
    )
    
}

export default ProductCard;