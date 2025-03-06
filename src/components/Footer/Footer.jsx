import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import {
  Instagram,
  TelephoneFill,
  GeoAltFill,
  EnvelopeFill,
} from "react-bootstrap-icons";
import "./styles.scss";
import CATEGORIES from "../../products/categories";

const Footer = () => {
  return (
    <footer className=" text-center text-white footer">
      <div className="container">
        <section className="">
          <Row>
            <Col mb="6">
              <Row>
                <Col className="list-unstyled contacts">
                  <Link to="/" className="navbar_logotype">
                    <h2>Elektronika CZ</h2>
                  </Link>
                  <p>
                    <TelephoneFill /> +420 (551) 12 34 56
                  </p>
                  <p>
                    <TelephoneFill /> +420 (703) 12 34 56
                  </p>
                  <p>
                    <TelephoneFill /> +420 (779) 12 34 56
                  </p>
                  <p>
                    <EnvelopeFill /> elektronika_cz@seznam.cz
                  </p>
                  <p>
                    <a
                      className="nav-link"
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noreferrer" 
                    >
                      <Instagram /> @elektronika_cz
                    </a>
                  </p>
                  <p>
                    <GeoAltFill />Praha, Česká republika, 110 00, Vodičkova 701/31
                  </p>
                </Col>
              </Row>
            </Col>
            <Col mb="6">
              <div className="footer_side">
                {CATEGORIES.map((category, i) => {
                  return (
                    <div className="category_block" key={i}>
                      <div>
                        <Link
                          to={category.link}
                          className="nav-item nav-link text-uppercase">
                          {category.title}
                        </Link>
                      </div>
                      {category.subCategories ? (
                        <ul className="list-unstyled footer_nav_list">
                          {category.subCategories.map((subCategory, j) => {
                            return (
                              <Link
                                className="nav-item nav-link sub_category_item"
                                to={category.link + subCategory.link}
                                key={j}
                              >
                                {subCategory.title}
                              </Link>
                            );
                          })}
                        </ul>
                      ) : (
                        null
                      )}
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </section>
      </div>
      <div className="text-center p-3">
        © 2025 Vývojář: <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/adilet-aitmatov/" className="text-white">Adilet Aitmatov</a>
      </div>
    </footer>
  );
};

export default Footer;
