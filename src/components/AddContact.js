import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AddContact() {
  return (
    <Container>
      <Row>
        <Link to={"/addcontact"}>
          <Button>Add Contact</Button>
        </Link>
      </Row>
    </Container>
  );
}
