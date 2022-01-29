import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import AddContact from "./AddContact";
// import OnGoingCall from "./OnGoingCall";

export default function ContactListApiCall() {
  const [apiData, setApiData] = useState([]);

  // const location = useLocation();
  // const { name } = location.state;
  // console.log("from home" + name);

  useEffect(() => {
    axios
      .get(`https://61f27a822219930017f5061e.mockapi.io/contactlist`)
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  //sorting the main list
  apiData.sort(function (a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return (
    <Container>
      {/* {name ? <OnGoingCall></OnGoingCall> : null} */}
      <Card>
        <Card.Body className="fs-1">Contact List</Card.Body>
      </Card>
      {apiData.map((contact) => (
        <Card key={contact.name}>
          <Card.Body>
            <Link
              to="/details"
              state={{
                name: contact.name,
                number: contact.number,
                id: contact.id,
              }}
            >
              {contact.name}
            </Link>
          </Card.Body>
          <Card.Body>{contact.number}</Card.Body>
        </Card>
      ))}
      <hr />

      <Container>
        <Row>
          <Col>
            <AddContact></AddContact>
          </Col>
          <Col>
            <Link to={"/recentlist"}>
              <Button>Recrent List</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
