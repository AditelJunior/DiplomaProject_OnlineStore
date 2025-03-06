import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import "./styles.scss";
import CATEGORIES from "../../products/categories";

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const navigate = useNavigate();

  const favouritesList = useSelector(state => state.favourites.favouriteProducts);
  const itemsToCompare = useSelector(state => state.compare.productsToCompare);
  const cartProducts = useSelector(state => state.cart.cartProducts);

  const searchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {

      navigate(`/search/?query=${encodeURIComponent(searchQuery)}`);
    }

  };
  return (
    <Navbar expand="lg" className="navbar">
      <div className="nav_container">
        <Link to="/" className="navbar_logotype navbar_logotype_desktop">
          <Navbar.Brand> 
            {/* <img src={Logo}/> */}
            <span>Elektronika CZ</span>
            </Navbar.Brand>
        </Link>
        <div className="d-flex wrap_special_nav_items">
          <Link className="nav-item nav-link nav-item-with_bubble hide_on_mobile" to="/favourite">
            Oblibené
            {favouritesList ? <span className="bubble">{favouritesList.length}</span> : null}
          </Link>
          <Link className="nav-item nav-link nav-item-with_bubble hide_on_mobile" to="/comparison">
            Porovnání
            {itemsToCompare ? <span className="bubble">{itemsToCompare.length}</span> : null}
          </Link>
          <Link className="nav-item nav-link nav-item-with_bubble hide_on_mobile" to="/cart">
            Košík
            {cartProducts ? <span className="bubble">{cartProducts.length}</span> : null}
          </Link>
        </div>
        
        <Form className="d-flex" onSubmit={(event) => searchSubmit(event)}>
          <Form.Control
            type="search"
            placeholder="Co hledáte?"
            className="me-2"
            aria-label="Поиск"
            onChange={(e) => searchChange(e)}
          />
          <Button variant="danger" type="submit">
            Hledat
          </Button>
        </Form>
      </div>

      <Container>
        <Link to="/" className="navbar_logotype navbar_logotype_mobile">
          <Navbar.Brand>VseProElektroniku</Navbar.Brand>
        </Link>
        <Navbar.Toggle
          className="navbar_toggler_button"
          aria-controls="navbarScroll"
        >
          <List />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav>
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
            <Link className="nav-item nav-link nav-item-with_bubble hide_on_desktop" to="/favourite">
              Oblibené
              {favouritesList ? <span className="bubble">{favouritesList.length}</span> : null}
            </Link>
            <Link className="nav-item nav-link nav-item-with_bubble hide_on_desktop" to="/comparison">
              Porovnání
              {itemsToCompare ? <span className="bubble">{itemsToCompare.length}</span> : null}
            </Link>
            <Link className="nav-item nav-link nav-item-with_bubble hide_on_desktop" to="/cart">
              Košík
              {cartProducts ? <span className="bubble">{cartProducts.length}</span> : null}
            </Link>
            <Link className="nav-item nav-link" to="/about">
              Kontakty
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
