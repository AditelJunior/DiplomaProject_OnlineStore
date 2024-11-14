import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import "./styles.scss";
import CATEGORIES from "../../products/categories";
// import PRODUCTS from "../../products/products";

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const searchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const searchSubmit = () => {
    navigate("/search/" + searchQuery);
    console.log("/search/" + searchQuery);
  };
  return (
    <Navbar expand="lg" className="navbar">
      <div className="nav_container">
        <Link to="/" className="navbar_logotype navbar_logotype_desktop">
          <Navbar.Brand>Arsenal Center</Navbar.Brand>
        </Link>
        <Form className="d-flex" onSubmit={() => searchSubmit()}>
          <Form.Control
            type="search"
            placeholder="Введите название..."
            className="me-2"
            aria-label="Поиск"
            onChange={(e) => searchChange(e)}
          />
          <Button variant="danger" type="submit">
            Поиск
          </Button>
        </Form>
      </div>

      <Container>
        <Link to="/" className="navbar_logotype navbar_logotype_mobile">
          <Navbar.Brand>Arsenal Center</Navbar.Brand>
        </Link>
        <Navbar.Toggle
          className="navbar_toggler_button"
          aria-controls="navbarScroll"
        >
          <List />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ maxHeight: "500px" }}>
            {CATEGORIES.map((category, i) => {
              return category.subCategories ? (
                <NavDropdown
                  className="categoryDropdown"
                  title={category.title}
                  key={i}
                >
                  <NavDropdown.Item
                    as={Link}
                    className="nav-item nav-link sub_category_item"
                    to={category.link}
                    key={category.title + i}
                  >
                    {category.title}
                  </NavDropdown.Item>
                  {category.subCategories.map((subCategory, i) => {
                    return (
                      <NavDropdown.Item
                        as={Link}
                        className="nav-item nav-link sub_category_item"
                        to={category.link + subCategory.link}
                        key={subCategory.title + i}
                      >
                        {subCategory.title}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              ) : (
                <Link className="nav-item nav-link" to={category.link} key={i}>
                  {category.title}
                </Link>
              );
            })}
            <Link className="nav-item nav-link" to="/about">
              About
            </Link>
            {/* <Link className="nav-item nav-link navbar_cart" to="/cart"> <Cart4/> <span className="bubble">{cartLength}</span></Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
