import { Container, Row, Col, Image, Card } from "react-bootstrap";
import keys from "../assets/photos/keys2.png";
import space from "../assets/photos/space.png";
import "../assets/css/RPGGame.css";

function RPGGame() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <iframe src="http://localhost:4000/" width="100%" height="600px"></iframe>
      <Container fluid className="d-flex justify-content-center">
        <Row>
          <Col md="auto">
            <Card
              style={{ width: "300px", backgroundColor: "violet" }}
              className="mt-4 mb-4"
            >
              <Card.Header className="text-center">
                <h2>How To Play</h2>
              </Card.Header>
              <Card.Body className="text-center">
                <Row>
                <Col md={6}>
                  <img src={keys} width="100" height="99" className="mx-auto" />
                  <strong>Move</strong>
                </Col>
                <Col md={6}>
                  <img src={space} width="100" height="51" className="my-4" />
                  <strong>Interact</strong>
                </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default RPGGame;
