import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EditContact({ name, number, id }) {
  return (
    <Container>
      <Row>
        <Link
          to="/editcontact"
          state={{
            name: name,
            number: number,
            id: id,
          }}
        >
          <Button>Edit Contact</Button>
        </Link>
      </Row>
    </Container>
  );
}
