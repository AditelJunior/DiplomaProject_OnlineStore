import React from "react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCompare } from "./../../actions/productsActions";
import { Trash, DashLg } from 'react-bootstrap-icons';
import BalanceIcon from "../../assets/icons/balance_icon.svg";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import "./styles.scss";


const CompareWidget = () => {
    const location = useLocation();
    const itemsToCompare = useSelector(state => state.compare.productsToCompare);
    const [ hideWidget, setHideWidget ] = useState(false);

    let renderArr = [];

    for (let i = 0; i < itemsToCompare.length; i++) {
        const element = itemsToCompare[i];
        renderArr.push(<ComapareWidgetContentLine key={i} product={element}/>)
    }
    
    if (itemsToCompare.length > 0 && !location.pathname.includes('comparison')) {
        return ( 
            <div className={`compare_widget_wrap ${hideWidget ? 'hide' : ''}`}>
                <div className="compare_widget_top">
                    <button className="load_more btn btn-outline-primary" onClick={() => {hideWidget ? setHideWidget(false) : setHideWidget(true)}}>{hideWidget ? <img src={BalanceIcon} alt=""/> : '—'} </button>
                </div>
                <span className="compare_widget_heading">Товары для сравнения:</span>
                <div className="d-flex compare_list">{renderArr}</div>
                {renderArr.length >1 ? <Link className="load_more btn btn-outline-primary" to={'/comparison'}>Смотреть сравнение</Link> : null}
            </div>)
    } else {
        return null
    }
}
const ComapareWidgetContentLine = (props, key) => {
    const dispatch = useDispatch();
    const product = props.product;

    return (<div key={key} className="compare_widget_item">
                <Link className="compare_link" to={`/products/${product.id}`}>
                    {product.title.slice(0, 15)}
                    {product.title.length > 15 ? "..." : null}
                </Link>
                <button onClick={()=>{dispatch(removeProductFromCompare(product.id))}}><Trash/></button>
            </div>
    )
}
export default CompareWidget;