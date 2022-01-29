import React from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export default function EditContactDetails() {
  const location = useLocation();
  const [name1, setName] = useState();
  const [number1, setNumber] = useState();
  const { name, id, number } = location.state;
  console.log(name);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeNumber(e) {
    setNumber(e.target.value);
  }

  function handleEdit(e) {
    if (name !== name1) {
      axios.put(
        `https://61f27a822219930017f5061e.mockapi.io/contactlist/${id}`,
        {
          name: name1,
          number: number1,
        }
      );
      alert("contact has been updated");
    }
    else{
        alert("wrong input");
    }
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue={name}
            onChange={handleChangeName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            defaultValue={number}
            onChange={handleChangeNumber}
          />
        </Form.Group>
        <Link to="/">
          <Button variant="primary" type="submit" onClick={handleEdit}>
            Edit Contact
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
