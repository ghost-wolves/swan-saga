import { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown, Row, Col, Image, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import girl from "../assets/photos/girlswan2.jpg";
import swanIcon from "../assets/photos/swanicon.png";
import "../assets/css/Game.css";
import AuthContext from "../context/AuthContext";

function Game() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      // If we're not in the loading phase, check the user's authentication status
      if (!auth.user) {
        navigate("/");
      }
    }
  }, [auth.user, navigate, loading]);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false); // Mark the loading as completed after the "check"
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while checking the authentication status
  }

  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col xs={6} className="text-center">
          <Card className="intro-card">
            <Card.Body className="intro-text">
              <h1 className="welcome-text">WELCOME</h1>
              <img src={swanIcon} alt="Swan Icon" className="swan-image" />
              <p className="description-text">
                to a world where time drifts slowly. A world where wonder and
                magic are just around the corner. Experience the perfect game
                for your way of life. Direct from the sleepy heartland of
                America, this multi-platinum RPG has won the hearts of millions.
              </p>
              <p className="description-text">
                Set adrift in the timeless land of Lospé - The Isle of Dreams.
                Join Kyre in her quest to find the Swan of Sorrow and save the
                realm from the Notspoken.
              </p>
              <p className="description-text">
                {" "}
                Follow the will-o'-the-wisp into the great unknown.</p>
                <p className="description-text">No other
                game gives you the feeling of Swan Saga.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Image src={girl} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Game;
