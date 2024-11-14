import React from "react";
import "./styles.scss";
import Spinner from 'react-bootstrap/Spinner';

const Loader = (props) => {

  return (
    <div className="loader_wrapper">
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  );
};

export default Loader;
