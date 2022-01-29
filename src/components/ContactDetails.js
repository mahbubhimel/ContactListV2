import { Link, useLocation } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import axios from "axios";
import { useState, useEffect } from "react";
export default function ContactDetails() {
  const location = useLocation();
  const { name, number, id } = location.state;

  const [apiData, setApiData] = useState([]);

  const array = [];

  useEffect(() => {
    axios
      .get(`https://61f27a822219930017f5061e.mockapi.io/RecentList`)
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  apiData.map((contact) => array.push(contact.name));

  // var arr = [];

  function handleRecent() {
    let prevName = array.indexOf(name) > -1;
    if (!prevName) {
      axios.post(`https://61f27a822219930017f5061e.mockapi.io/RecentList`, {
        name,
        number,
      });
    } 
  }

  return (
    <Container>
      <Card>
        <Card.Body className="fs-1">Contact Details</Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{number}</Card.Text>
          <Link
            to="/callui"
            state={{
              name: name,
              number: number,
              id: id,
            }}
          >
            <Button variant="success" type="button" onClick={handleRecent}>
              Call
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <hr></hr>
      <Footer name={name} number={number} id={id}></Footer>
    </Container>
  );
}
