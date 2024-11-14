import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import {
  Instagram,
  Whatsapp,
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
                    <h2>Arsenal Center</h2>
                  </Link>
                  <p>
                    <TelephoneFill /> +996 (551) 97 73 82
                  </p>
                  <p>
                    <TelephoneFill /> +996 (703) 43 44 14
                  </p>
                  <p>
                    <TelephoneFill /> +996 (779) 20 00 10
                  </p>
                  <p>
                    <EnvelopeFill /> arsenalcentrecompany@gmail.com
                  </p>
                  <p>
                    <a
                      className="nav-link"
                      href="https://www.instagram.com/arsenalcentre_kg/"
                      target="_blank"
                    >
                      <Instagram /> @arsenalcentre_kg
                    </a>
                  </p>
                  <p>
                    <GeoAltFill /> Bishkek, Salieva street, 145A
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
        © 2024 Copyright: <p className="text-white">Adilet Aitmatov</p>
      </div>
    </footer>
  );
};

export default Footer;
