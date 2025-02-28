import React, { useEffect, useState } from "react";

import Carousel from 'react-bootstrap/Carousel';

import HomeProductList from "../../components/HomeProductList/HomeProductList";

import Loader from "../../components/Loader/Loader";

import "./styles.scss"

import { collection, getDocs, where, limit, query, orderBy, doc } from "firebase/firestore";
import db from "../../firebase";

const Home = () => {
    const [carouselData, setCarouselData] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        getHomeCarouselData();
        getCategory('chytre_telefony', 4);
        getCategory('notebooky', 4);
        getCategory('personalni_pocitace', 4);
        getCategory('herni_pocitace', 4);
    }, [])
  
    async function getCategory(subCategory, limitation) {
      let object = {};
      const collection_ref = collection(db, 'products');
      const q = query(collection_ref, where("subCategory", "==", subCategory), limit(limitation));
  
      const doc_refs = await getDocs(q).catch(error => {console.log(error)});;
      console.log(doc_refs.docs);
      object.products = doc_refs.docs.map((doc) => {
        return {id: doc.id, ...doc.data()}
      });
      object.id = subCategory;

      setProducts(current => [...current, object]);
      setLoaded(true);
    }
    async function getHomeCarouselData() {
        let docsArray = [];
        const collection_ref = collection(db, 'home_carousel');
        const doc_refs = await getDocs(collection_ref).catch(error => {console.log(error)});;
        doc_refs.docs.map((doc) => {
            return docsArray.push(doc.data());
        })
        setCarouselData(docsArray.sort((a,b) => a.order - b.order));
    }
    return (
        <div className="home_container">
            <Carousel data-bs-theme="dark" interval={null}>
                {
                    carouselData.map((carouselItem, i) => {
                        return (
                            <Carousel.Item key={i}>
                                <img
                                    className="d-block w-100 carousel_img"
                                    src={carouselItem.image[0].downloadURL}
                                    alt={'Slide number ' + carouselItem.order}
                                />
                                {
                                carouselItem.title && carouselItem.content ?
                                <Carousel.Caption>
                                    <div className="carousel_text_block">
                                        <h2>{carouselItem.title}</h2>
                                        <p>{carouselItem.content}</p>
                                    </div>
                                </Carousel.Caption> : null
                                }
                            </Carousel.Item>
                        )
                    })
                }
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