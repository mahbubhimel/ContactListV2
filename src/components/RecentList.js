import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";


export default function RecentList() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://61f27a822219930017f5061e.mockapi.io/RecentList`)
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
      <Card>
        <Card.Body className="fs-1">Recent List</Card.Body>
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

      <Link to={"/"}>
        <Button>Contact List</Button>
      </Link>
    </Container>
  );
}
