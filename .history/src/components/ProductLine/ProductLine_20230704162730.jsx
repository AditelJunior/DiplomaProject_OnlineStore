import React from "react";
import { addToCart, removeFromCart, decreaseProduct, increaseProduct } from "../../actions/cartActions";
import { useDispatch } from 'react-redux';
import "./styles.scss"
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ProductLine = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    return (
        <ListGroup.Item as="li" className="product_line">
            <Row className="product_line_row">
                <Col xs={4}>
                    <img src={item.image} className="cart_image"/>
                </Col>
                <Col xs={5}>
                    <p>{item.title}</p>
                </Col>
                <Col xs={1}>
                    <b>{item.price}$</b>
                </Col>
                <Col xs={2} className="product_line_quantity">
                    <Button onClick={()=>dispatch(increaseProduct(item))} variant="outline-success" size="sm">+</Button>
                    <p>{item.quantity}</p>
                    <Button onClick={()=>dispatch(decreaseProduct(item))} variant="outline-danger" size="sm">-</Button>
                </Col>
            </Row>
        </ListGroup.Item>
        // <li className="product">


            // {/* <Link to={`/product/${item.id}`}> */}

        //         {/* <Card>
        //         <Card.Img className="product_image" variant="top" src={item.image} />
        //         <Card.Body>
        //             <Card.Title className="product_title">{item.title}</Card.Title>
        //             <Card.Subtitle className="product_subtitle mb-2 text-muted"><b>{item.price}$</b></Card.Subtitle>
                    
        //             <Button onClick={dispatch(addToCart(item))} className="product_buy_button btn btn-danger">Add To Cart</Button>
        //         </Card.Body>
        //         </Card>    */}
        //     {/* </Link> */}
        // {/* </li> */}
    )
    
}

export default ProductLine;