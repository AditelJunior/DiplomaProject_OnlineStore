import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import "./styles.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getStorage, ref } from "firebase/storage";
import Placeholder from "../../assets/images/placeholder.jpg";
const Product = () => {
    const products = useSelector(state => state.shopping.products)
    const productsLoaded = useSelector(state => state.shopping.isLoaded)

    const { mainCategory, categoryId, number } = useParams();
    const [ product, setProduct ] = useState([]);
    
	useEffect(() => {
        console.log(mainCategory);
        console.log(categoryId);
        // console.log(category);
        productsLoaded
        ? handleProductList(mainCategory, categoryId, number)
        : console.log('lolo')
	}, [ mainCategory, categoryId, number, productsLoaded ]);

    const handleProductList = (mainCategory, categoryId, number) => {
        let category;
        if (mainCategory == 'weapons') {
            category = products.weapons.find((category)=> category.id == categoryId);
        } else if (mainCategory == 'protection'){
            category = products.protection.find((category)=> category.id == categoryId);
        } else if (mainCategory == 'knifes'){
            category = products.knifes.find((category)=> category.id == categoryId);
        } else {
            console.log(mainCategory);
            console.log(categoryId);
            console.log(number);
            console.log('ERROR ERROR ERROR ERROR')
        }
        let currentProduct = category.products[Number(number)]
        setProduct(currentProduct);

        console.log(currentProduct)
        console.log(category)

        console.log(product)
        // params: {productId: item.id}
    }
    return (
        productsLoaded
        ?
        <div className="container product_container">
            <h1 className="pageTitle">{product.title}</h1>
            <Card>
                <Row>
                    <Col xs={12} md={8}>
                        <img className="product_image" src={product.image ? product.image : Placeholder} />
                        <div className="product_description">
                            <p>{product.description}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <Row className="product_info_row">
                            <Col xs={6}>Manufacturer: </Col>
                            <Col xs={6}>{product.manufacturer ? product.manufacturer : "-"}</Col>
                        </Row>
                        <Row className="product_info_row">
                            <Col xs={6}>Caliber: </Col>
                            <Col xs={6}>{product.caliber ? product.caliber : "-"}</Col>
                        </Row>
                        <Row className="product_info_row">
                            <Col xs={6}>Barrel length: </Col>
                            <Col xs={6}>{product.barrelLength ? product.barrelLength : "-"}</Col>
                        </Row>
                        <Row className="product_info_row">
                            <Col xs={6}>Weight: </Col>
                            <Col xs={6}>{product.weight ? product.weight : "-"}</Col>
                        </Row>
                        <Row className="product_info_row">
                            <Col xs={6}>Total length: </Col>
                            <Col xs={6}>{product.totalLength ? product.totalLength : "-"}</Col>
                        </Row>
                        <Row className="product_info_row product_price">
                            <Col xs={6}>Price: </Col>
                            <Col xs={6} className="">{product.price ? product.price : "-"} $</Col>
                        </Row>
                        {/* <Button className="add_to_cart_button" variant="success" size="lg" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Button> */}
                    </Col>
                </Row>
            </Card>
        </div>
        :
        <b>Loading...</b>
    )
    
}

export default Product;