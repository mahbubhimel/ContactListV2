import axios from "axios";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DeleteContact({ id }) {
  function handleDelete() {
    axios.delete(
      `https://61f27a822219930017f5061e.mockapi.io/contactlist/${id}`
    );

    alert("contact deleted");
  }
  return (
    <Container>
      <Row>
        <Link to="/">
          <Button onClick={handleDelete}>Delete Contact</Button>
        </Link>
      </Row>
    </Container>
  );
}
