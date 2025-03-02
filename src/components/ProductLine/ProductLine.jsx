import React from "react";
import {
  decreaseProduct,
  increaseProduct,
} from "../../actions/productsActions";
import { useDispatch } from "react-redux";
import "./styles.scss";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductLine = (props) => {
  const item = props.item;
  console.log(props.index);
  const dispatch = useDispatch();

  const decreaseProductCart = (e, index) => {
      e.preventDefault();
      dispatch(decreaseProduct(index));
  }
  const increaseProductCart = (e, index) => {
    e.preventDefault();
    dispatch(increaseProduct(index));
}
  return (
    <ListGroup.Item as="li" className="product_line">
      <Row className="product_line_row">
        <Col xs={4}>
          <img src={item.image} className="cart_image" />
        </Col>
        <Col xs={5}>
          <p>{item.title}</p>
        </Col>
        <Col xs={1}>
          <b>{item.price}Kč</b>
        </Col>
        <Col xs={2} className="product_line_quantity">
          <Button
            onClick={(e) => increaseProductCart(e, props.index)}
            variant="outline-success"
            size="sm"
          >
            +
          </Button>
          <p>{item.quantity}</p>
          <Button
            onClick={(e) => decreaseProductCart(e, props.index)}
            variant="outline-danger"
            size="sm"
          >
            -
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
    
  );
};

export default ProductLine;
