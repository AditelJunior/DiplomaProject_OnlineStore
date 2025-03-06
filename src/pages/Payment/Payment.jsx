import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./styles.scss";

const Payment = () => {
  return (
    <div className="container container_payment">
      <h1 className="pageTitle">Osobní údaje</h1>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          {/* <Form.Label>Jméno</Form.Label> */}
          <Form.Control type="text" placeholder="Jméno" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Adresa</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        {/* <Form.Label>Addresa 2</Form.Label> */}
        <Form.Control placeholder="č bytu, patro ..." />
      </Form.Group>

      <Row className="mb-3 form_grid_row">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Mesto</Form.Label>
          <Form.Control  placeholder="Město"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Stat</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Výbrat...</option>
            <option>Česko</option>
            <option>Slovensko</option>
            <option>Německo</option>
            <option>Polsko</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control placeholder="zip"/>
        </Form.Group>
      </Row>

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="dark" type="submit">
        Zaplatit
      </Button>
    </Form>
    </div>
  );
};

export default Payment;
