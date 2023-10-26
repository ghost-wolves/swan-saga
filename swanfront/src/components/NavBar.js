import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import Swan from "../assets/photos/swanicon.png";
import Swan2 from "../assets/photos/swanicon2.png";
import "../assets/css/NavBar.css";
import AuthContext from "../context/AuthContext";

function Navigation() {
  const auth = useContext(AuthContext);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 px-4 d-flex justify-content-between">
            <div className="d-lg-flex">
              <Nav.Link className="nav-link-margin" as={Link} to="/rpggame">
                Play Game
              </Nav.Link>
              <div></div>
              <Nav.Link as={Link} to="/about">
                About Me
              </Nav.Link>
            </div>

            <div
              className="title d-lg-flex align-items-center"
              style={{
                letterSpacing: "30px",
                color: "white",
              }}
            >
              SWAN SAGA
            </div>

            <div className="d-lg-flex align-items-center">
              {!auth.user && (
                <Nav.Link as={Link} to="/login">
                  Log In
                </Nav.Link>
              )}

              {auth.user && (
                <Nav.Link onClick={auth.logout} as={Link} to="/">
                  Log Out
                </Nav.Link>
              )}

              <Navbar.Brand className="navbar-brand ms-4" as={Link} to="/game">
                <img src={Swan} alt="Swan Icon" height="30" width="30" />
              </Navbar.Brand>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
