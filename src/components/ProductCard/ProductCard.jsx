import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setProductToCompare, toggleFavouriteProduct, addToCart} from "./../../actions/productsActions";
import "./styles.scss";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Placeholder from "../../assets/images/placeholder.jpg";
import BalanceIcon from "../../assets/icons/balance_icon.svg";
import CartIcon from "../../assets/icons/cart-fill.svg";
import CartCheckedIcon from "../../assets/icons/cart-check-fill.svg";
import BalanceDarkIcon from "../../assets/icons/balance_icon_dark.svg";
import StarFill from "../../assets/icons/star-fill.svg";
import StarFillBlack from "../../assets/icons/star-fill-black.svg";

const ProductCard = (props) => {

  const favouritesList = useSelector(state => state.favourites.favouriteProducts);
  const itemsToCompare = useSelector(state => state.compare.productsToCompare);
  const cartProducts = useSelector(state => state.cart.cartProducts);
  
  const dispatch = useDispatch();

  const product = props.item;
  
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
  return (
    <li className="product">
      <Link to={`/products/${product.id}`} className="product_card_link" name={'product card' + product.title}>
        <Card>
          <div className="side_buttons">
            <button className="star_btn" onClick={(e) => moveToCart(e, product)}>
            {
                <img src={cartProducts.find(item => item.id === product.id) ? CartCheckedIcon : CartIcon} alt="favourite button"/>
            }
            </button>
            <button className="compare_button" onClick={(e) => addToCompare(e, product)}>
              {
                <img src={itemsToCompare.find(item => item.id === product.id) ? BalanceDarkIcon : BalanceIcon} alt="compare button"/>
              }
            </button>
            <button className="star_btn" onClick={(e) => addToFavourites(e, product)}>
            {
                <img src={favouritesList.find(item => item.id === product.id) ? StarFillBlack : StarFill} alt="favourite button"/>
            }
            </button>
          </div>
          <Card.Img
            className="product_image"
            variant="top"
            alt={product.title}
            src={product.images && product.images.length ? product.images[0] : Placeholder}/>
          <Card.Body>
            <Card.Title className="product_title">
              <span>
                {product.title}
              </span>
            </Card.Title>
            <Card.Subtitle className="product_subtitle mb-2 text-muted">
              {product.available ? <span className="text-success">Je v prodejí</span> : <span className="text-danger">Není v prodejí</span>}
              <b className="product_price">{product.price}&nbsp;<span>Kč</span></b>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </li>
  );
};

export default ProductCard;
