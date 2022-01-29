import { Button, Col, Container, Row } from "react-bootstrap";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";
import { Link } from "react-router-dom";

export default function Footer({ name, number, id }) {
  return (
    <Container>
      <Row>
        <Col className="col-3">
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </Col>
        <Col className="col-3">
          <EditContact name={name} number={number} id={id}></EditContact>
        </Col>
        <Col className="col-3">
          <DeleteContact name={name} number={number} id={id}></DeleteContact>
        </Col>
      </Row>
    </Container>
  );
}
