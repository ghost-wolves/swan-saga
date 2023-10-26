import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import "../assets/css/Login.css";

function NewUser() {
  const navigate = useNavigate();

  // Local state to hold the form data
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    // ... any other fields you want to include, like email, full name, etc.
  });
  const [error, setError] = useState("");

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear out any existing errors

    try {
      const response = await fetch(`http://localhost:8080/create_account`, {
        // Adjust this if you have a base URL or context path
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // If the user was successfully created, you might want to redirect to the login page
        navigate("/", {
          state: { message: `User: ${userData.username} created! Please log in!` },
        });
      } else {
        // If there was an error, you might want to display these to the user
        const errorData = await response.json();
        setError(errorData.join(", ")); // Assuming the errors are returned as an array of strings
      }
    } catch (error) {
      setError("An error occurred while sending data.");
    }
  };


  // Handler for input changes to update local state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="login-container">
      <div className="banner">S W A N &nbsp; S A G A</div>{" "}
      {/* Use the same class as the Login component */}
      <div className="login-form">
        {" "}
        {/* Use the same class as the Login component */}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="username">
            <Form.Label id="userlabel" column sm="3">
              Username
            </Form.Label>
            <Col sm="9">
              <Form.Control
                className="full-width"
                type="text"
                placeholder="Enter username"
                name="username"
                value={userData.username}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="password">
            <Form.Label id="passlabel" column sm="3">
              Password
            </Form.Label>
            <Col sm="9">
              <Form.Control
                className="full-width"
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <div className="btn-group">
            <Button variant="primary" type="submit" className="btn-login">
              Register
            </Button>
            <Link className="btn-cancel" to="/">
              Back to Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default NewUser;
