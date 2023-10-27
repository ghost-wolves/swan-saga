import React from "react";
import "../assets/css/AboutMe.css";
import sgirl from "../assets/photos/swangirl1.png";
import profilePic from "../assets/photos/mogicon.png";
import { Container, Nav, Navbar, NavDropdown, Row, Col, Image, Card } from "react-bootstrap";

function AboutMe() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col xs={7}>
          <div className="about-me-container">
            <div className="profile-card">
              <img src={profilePic} alt="Profile" className="profile-pic" />
              <h1 className="profile-name">Sawyer</h1>
              <h2 className="profile-description">Coding Eternal</h2>
              <ul className="profile-details">
                <li>In space</li>
                <li>the stars</li>
                <li>are no nearer</li>
              </ul>
              <div className="profile-links">
                <a
                  href="https://github.com/ghost-wolves"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sawyer-beaton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={5}>
          <Image src={sgirl} fluid className="rounded-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
