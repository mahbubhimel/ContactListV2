import { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddContactDetails() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const [apiData, setApiData] = useState([]);

  const array = [];

  useEffect(() => {
    axios
      .get(`https://61f27a822219930017f5061e.mockapi.io/contactlist`)
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  apiData.map((contact) => array.push(contact.name));

  console.log(array);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeNumber(e) {
    setNumber(e.target.value);
  }

  function onFormSubmit(e) {
    let prevName = array.indexOf(name) > -1;
    if (!prevName) {
      axios.post(`https://61f27a822219930017f5061e.mockapi.io/contactlist`, {
        name,
        number,
      });
      alert("contact added");
    }
    else{
      alert("already exists!")
    }
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={handleChangeName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Number"
            onChange={handleChangeNumber}
          />
        </Form.Group>
        <Link to="/">
          <Button variant="primary" type="submit" onClick={onFormSubmit}>
            Add Contact
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
