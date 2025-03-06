import React, { useEffect, useState } from "react";

import Carousel from 'react-bootstrap/Carousel';

import HomeProductList from "../../components/HomeProductList/HomeProductList";

import Loader from "../../components/Loader/Loader";

import "./styles.scss"
import Slider1 from "./../../assets/images/slider_1.jpg";
import Slider2 from "./../../assets/images/slider_2.jpg";
import { collection, getDocs, where, limit, query } from "firebase/firestore";
import db from "../../firebase";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        getCategory('chytre_telefony', 4);
        getCategory('notebooky', 4);
        getCategory('personalni_pocitace', 4);
        getCategory('herni_pocitace', 4);
    }, [])
  
    async function getCategory(subCategory, limitation) {
      let object = {};
      const collection_ref = collection(db, 'products');
      const q = query(collection_ref, where("subCategory", "==", subCategory), limit(limitation));
  
      const doc_refs = await getDocs(q).catch(error => {console.log(error)});
      object.products = doc_refs.docs.map((doc) => {
        return {id: doc.id, ...doc.data()}
      });
      object.id = subCategory;

      setProducts(current => [...current, object]);
      setLoaded(true);
    }
    return (
        <div className="home_container">
            <Carousel data-bs-theme="dark" interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel_img"
                        src={Slider1}
                        alt={'Slide number 1'}
                    />
                    <Carousel.Caption>
                        <div className="carousel_text_block">
                            <h2>Kontakty</h2>
                            <p>Praha, Česká republika,<br/>                                
                            110 00, Vodičkova 701/31<br/> 
                            +420 (551) 12 34 56<br/> 
                            +420 (703) 12 34 56<br/> 
                            +420 (779) 12 34 56</p>
                        </div>
                    </Carousel.Caption> 
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel_img"
                        src={Slider2}
                        alt={'Slide number 1'}
                    />
                    <Carousel.Caption>
                        <div className="carousel_text_block">
                            <h2>Pracovní doba</h2>
                            <p>Pondelí - Pátek <br/> 
                            9:00 - 18:00</p>
                        </div>
                    </Carousel.Caption> 
                </Carousel.Item>
            </Carousel>
            <div className="container">
                <h1 className="pageTitle">
                    Naše zboží
                </h1>
                {isLoaded
                    ? <HomeProductList products={products}/>
                    : <Loader/>
                }
            </div>
        </div>
    )
}

export default Home;