import React from "react";
import "./styles.scss";
import Spinner from 'react-bootstrap/Spinner';

const NoProducts = (props) => {

  return (
    <div className="loader_wrapper">
        <span>
          К сожалению в данной категории на данный момент нет продуктов.
        </span>
    </div>
  );
};

export default NoProducts;
