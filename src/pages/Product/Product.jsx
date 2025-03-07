import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./styles.scss";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from 'react-bootstrap/Carousel';
import { XLg } from 'react-bootstrap-icons';

import Placeholder from "../../assets/images/placeholder.jpg";
import { getDoc, doc } from "firebase/firestore";
import db from "../../firebase";
import { PROPS_TRANSLATION } from "./../../translations/comparisonTranslations";
import { setProductToCompare, toggleFavouriteProduct, addToCart } from "./../../actions/productsActions";

const Product = () => {
  const favouritesList = useSelector(state => state.favourites.favouriteProducts);
  const itemsToCompare = useSelector(state => state.compare.productsToCompare);
  const cartProducts = useSelector(state => state.cart.cartProducts);

  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    async function getProduct(id) {
      const productRef = await getDoc(doc(db, 'products', id)).catch(error => {console.log(error);})

      setProduct({...productRef.data(), id: productId});
      setLoaded(true);
    }
    getProduct(productId)
  }, [productId]);

  const addToCompare = (e, product) => {
    e.preventDefault();
    dispatch(setProductToCompare(product));

  }
  const addToFavourites = (e, product) => {
    e.preventDefault();
    dispatch(toggleFavouriteProduct(product));
  }
  const moveToCart = (e, product) => {
    e.preventDefault();
    dispatch(addToCart(product));
  }
  const setActiveImage = (image) => {
    setActiveModalImage(image);
    window.addEventListener('keydown', closeImageModal);
  }
  const closeImageModal = (e) => {
    if (e.key && e.key === 'Escape') {
      setActiveModalImage(null);
      window.removeEventListener('keydown', closeImageModal);
    } else if (!e.key) {
      setActiveModalImage(null);
    }
  }

  return isLoaded ? (
    <div className="container product_container">
      <h1 className="pageTitle">{product.title}</h1>
      <Card>
        <Row>
          <Col className="product_content_wrap product_content_left" xs={12} md={8}>
            { product.images ?
              <Carousel data-bs-theme="dark" controls={product.images.length > 1 ? true : false }>
                {
                  product.images.map((image, i) => {
                    return (
                      <Carousel.Item interval={1000000} key={i}>
                        <button className="carousel_img_button" onClick={(e) => setActiveImage(image.downloadURL)}>
                          <img
                            className="carousel_img"
                            src={image}
                            alt={'slide number ' + (i+1) + '; ' + product.title}
                          />
                        </button>
                      </Carousel.Item>
                    )
                  })
                }
              </Carousel> : 
              <img
                className="carousel_img"
                src={Placeholder}
                alt=""
              />
            }
            <div className="product_description">
              <p dangerouslySetInnerHTML={{__html: product.description}}></p>
            </div>
          </Col>
          <Col xs={12} md={4} className="product_content_wrap product_content_right">
          {product.price ? 
            <Row className="product_info_row product_price">
              <Col xs={6}>Cena: </Col>
              <Col xs={6} className="">
                {product.price} Kč
              </Col>
            </Row> : null}

            <h2 className="">Specifikace:</h2>

            {product.brand ? 
            <Row className="product_info_row">
              <Col xs={6}>{PROPS_TRANSLATION.brand}:</Col>
              <Col xs={6}>
                {product.brand}
              </Col>
            </Row> : null}
            
            {product.battery ? 
            <Row className="product_info_row">
              <Col xs={6}>{PROPS_TRANSLATION.battery}: </Col>
              <Col xs={6}>{product.battery}</Col>
            </Row> : null}

            {product.screen ? 
            <Row className="product_info_row">
              <Col xs={6}>{PROPS_TRANSLATION.screen}: </Col>
              <Col xs={6}>{product.screen}</Col>
            </Row> : null}

            {product.capacity ? 
            <Row className="product_info_row">
              <Col xs={6}>{PROPS_TRANSLATION.capacity}: </Col>
              <Col xs={6}>
              {product.capacity}
              </Col>
            </Row> : null}
            
            {product.energyClass ? 
            <Row className="product_info_row">
              <Col xs={6}>{PROPS_TRANSLATION.energyClass}: </Col>
              <Col xs={6}>
                {product.energyClass}
              </Col>
            </Row> : null}

            {product.weight ? 
            <Row className="product_info_row">
              <Col xs={6}>{PROPS_TRANSLATION.weight}: </Col>
              <Col xs={6}>
              {product.weight}
              </Col>
            </Row> : null}

            {product.ram ? 
            <Row className="product_info_row">
              <Col xs={6}>{PROPS_TRANSLATION.ram}: </Col>
              <Col xs={6}>
              {product.ram}
              </Col>
            </Row> : null}

            <Row className="product_info_row">
              <Col xs={6}>
                {PROPS_TRANSLATION.used}:
              </Col>
              {product.used ? 
              <Col xs={6} className="text-danger">Použitý
              </Col> : 
              <Col xs={6} className="text-success">Nový
              </Col>}
            </Row>

            <Row className="product_info_row">
              <Col xs={6}>
              {PROPS_TRANSLATION.available}:
              </Col>
              {product.available ? 
              <Col xs={6} className="text-success">Ano
              </Col> : 
              <Col xs={6} className="text-danger">Ne
              </Col>}
            </Row> 

            <Row className="product_buttons_row">
              <Button className="add_to_cart_button" variant={favouritesList.find(item => item.id === product.id) ? "secondary" : "dark" } size="lg" onClick={(e)=> addToFavourites(e, product)}>Přidat do oblíbených</Button>
              <Button className="add_to_cart_button" variant={itemsToCompare.find(item => item.id === product.id) ? "secondary" : "dark" } size="lg" onClick={(e)=> addToCompare(e, product)}>Porovnat</Button>
              <Button className="add_to_cart_button" variant={cartProducts.find(item => item.id === product.id) ? "secondary" : "dark" } size="lg" onClick={(e)=> moveToCart(e, product)}>Přidat do košíku</Button>
            </Row>
          </Col>
        </Row>
      </Card>
      {activeModalImage ? <ImageModal source={activeModalImage} changeActiveModalImage={closeImageModal}/> : null}
    </div>
  ) : (
    <b>Načítání...</b>
  );
};

const ImageModal = (props) => {

  return (
    <div className="modal_image_container">
      <button className="modal_close_button" onClick={(e)=> {props.changeActiveModalImage(e)}}><XLg width='20px' height='20px' color="#fff"/></button>
      <img src={props.source} className="modal_image" alt="modal"/>
    </div>
  )
}

export default Product;