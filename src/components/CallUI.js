import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function CallUI() {
  const location = useLocation();
  const { name, number } = location.state;

  const [count, setCount] = useState(0);

  var count1 = 0;

  function handleState() {
    // e.preventDefault();
    setCount(1);

    count1 = 1;
    console.log("hello " + count1);
  }
  function handleStateFalse() {
    // e.preventDefault();
    setCount(0);

    count1 = 0;
    console.log("hi" + count1);
  }

  console.log(count);

  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{number}.</p>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center">
          <Link
            to="/"
            state={{
              name,
            }}
          >
            <Button variant="secondary" onClick={handleState}>
              Back
            </Button>
          </Link>

          <Link
            to="/details"
            state={{
              name: name,
              number: number,
            }}
          >
            <Button variant="danger" onClick={handleStateFalse}>
              END
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}
