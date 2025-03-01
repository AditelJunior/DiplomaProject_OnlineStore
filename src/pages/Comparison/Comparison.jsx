import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCompareList } from "../../actions/productsActions";
import Button from 'react-bootstrap/Button';
import { NOT_COMPAREABLE_PROPS, PROPS_TRANSLATION } from "../../translations/comparisonTranslations";
import { SUB_CATEGORIES_TRANSLATION } from "../../translations/translations";

import "./styles.scss"


const Home = () => {
    const dispatch = useDispatch();
    const itemsToCompare = useSelector(state => state.compare.productsToCompare);
    const [propsToCompare, setPropsToCompare] = useState([]);

    useEffect(() => {
        const generatePropsToCompare = () => {
            let propsArr = [];
            
            for (let i = 0; i < itemsToCompare.length; i++) {
                for(var prop in itemsToCompare[i]) {
                    // add properties to compare if not in the NOT_COMPAREABLE_PROPS array
                    if (!NOT_COMPAREABLE_PROPS.includes(prop)) {
                        propsArr.push(prop);
                    }
                }
            }
            setPropsToCompare(Array.from(new Set(propsArr)));
    
        }
        generatePropsToCompare();
    }, [ itemsToCompare ])
   
    

    const handleClearCompareList = () => {
        if (window.confirm("Jste si jisti, že chcete vyčistit seznam pro porovnání?")) {
            dispatch(clearCompareList())
        }
    }

    return (
        <div className="container">
            <h1 className="pageTitle">Srovnání</h1>
            {
                itemsToCompare.length > 0 ?
            <div>
                <div className="comparison_table_wrap">
                    <table className="comparison_table">
                        <tbody>
                        <tr>
                            <th>{PROPS_TRANSLATION.title}</th>
                            {
                                itemsToCompare.map((product, i) => {
                                    return (
                                        <th key={i}><Link to={"/products/"+product.id}>{product.title}</Link></th>
                                    )
                                })
                            }
                        </tr>
                        {
                            propsToCompare.map((property,i) => {
                                if (property !== 'title') {
                                    return (
                                        <tr key={i}> 
                                            <th>{PROPS_TRANSLATION[property] ? PROPS_TRANSLATION[property] : property}</th>
                                            {
                                                itemsToCompare.map((product, i) => {
                                                    if (typeof product[property] !== 'boolean') {
                                                        if (property === 'price' ) {
                                                            return (
                                                                <td key={i}>{product[property] ? product[property] + ' ' + product.currency : '-'}</td>
                                                            )
                                                        } else if (SUB_CATEGORIES_TRANSLATION[product[property]]) {
                                                            return (
                                                                <td key={i}>{SUB_CATEGORIES_TRANSLATION[product[property]] ? SUB_CATEGORIES_TRANSLATION[product[property]] : '-'}</td>
                                                            )
                                                        } else {
                                                            return (
                                                                <td key={i}>{product[property] ? product[property] : '-'}</td>
                                                            )
                                                        }
                                                    } else {
                                                        // IF PROPERTY RETURNS BOOLEAN
                                                        switch(property) {
                                                            case 'available':
                                                                return <td key={i}>{product[property] ? 'Ano' : 'Ne'}</td>;
                                                            case 'used':
                                                                return <td key={i}>{product[property] ? 'Použitý' : 'Nový'}</td>;
                                                            default:
                                                                return <td key={i}>{product[property] ? 'Ano' : 'Ne'}</td>


                                                        }
                                                    }
                                                })
                                            }
                                        </tr>
                                    )
                                } else {
                                    return null
                                }
                            })
                        }
                        </tbody>
                        
                    </table> 
                </div>
                <Button 
                    variant="danger" 
                    onClick={(e)=> handleClearCompareList()}
                    className="clear_compare_list_btn">Vyčistit seznam</Button>  
            </div>
            :
            <div className="comparison_empty_wrap">
                <p>Přidejte zboží k porovnání.</p>
            </div>
        }
        </div>
    )
}

export default Home;