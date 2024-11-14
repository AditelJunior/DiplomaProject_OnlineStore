import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";

import {collection, where, orderBy, query, getCountFromServer} from "firebase/firestore";
import db from "../../firebase";

const Pagination = (props) => {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setLoaded] = useState(false)
  const collection_ref = collection(db, 'products');

  useEffect(() => {
    getPageCount();
    if (props.reload) {
      setCurrentPage(1);
    }
  }, [props.category, props.categoryLevel, props.reload]);

  const getPageCount = async () => {
    let count = await getCountFromServer(query(collection_ref, where(props.categoryLevel, "==", props.category), orderBy('updated_at', 'desc'))).catch(error => {console.log(error)});
    setNumPages(Math.ceil(count.data().count / props.pageSize));
    setLoaded(true)
  }

  const paginate = (direction) => {
    if (direction == 'next') {
        setCurrentPage(currentPage + 1);
    } else if (direction == 'prev') {
        setCurrentPage(currentPage - 1);
    }
    props.setter(direction);

  }
  const Thumbs = () => {
    
    let paginationList = [];
    for (let i = 0; i < numPages; i++) {
      paginationList.push(
        <li key={i}>
          <button
            className={ currentPage === i+1 ? "active" : ""}
            disabled={currentPage === i+1 ? true : false}
          >
            {i + 1}
          </button>
        </li>
      );
    }
    return paginationList;
  };
  
  return (
    <div className="d-flex justify-content-center">
        {
          isLoaded && numPages > 1 ? 
            <div className="pagination_container">
              <button
                  className="pagination_nav_btn"
                  onClick={(e) => paginate('prev')}
                  id="prev_button"
                  disabled={currentPage === 1}
              >
                  Назад
              </button>
              <ul className="product_list_pagination">
                  <Thumbs />
              </ul>
              <button
                  className="pagination_nav_btn"
                  onClick={(e) => paginate('next')}
                  id="next_button"
                  disabled={currentPage === numPages}
              >
                  Вперед
              </button>
            </div> : null
        }
        
    </div>
  );
};

export default Pagination;
