import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom"; // Added useLocation
import "../assets/css/Login.css";
import { login } from "../services/authapi";
import AuthContext from "../context/AuthContext";

function Login() {
  const location = useLocation(); // New line
  const navigate = useNavigate();

  //our states
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // New state for the message
  const [message, setMessage] = useState(location.state?.message || ""); // New line

  //our context for authentication
  const auth = useContext(AuthContext);

  //submit button function
  const handleSubmit = async (event) => {
    event.preventDefault();

    //clear the errors
    setErrors([]);

    //go through the login
    login({ username: user, password: password })
      .then((data) => {
        auth.handleLoggedIn(data);
        navigate("/game");
      })
      .catch((err) => {
        setErrors(["Invalid username/password."]);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {message && <Alert variant="success">{message}</Alert>} {/* New line */}
        {errors.map((error, i) => (
          <Alert variant="danger" key={i}>
            {error}
          </Alert>
        ))}
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="username">
            <Form.Label id="userlabel">Username</Form.Label>
              {" "}
              <Form.Control
                className="full-width"
                required
                name="userName"
                onChange={(event) => setUser(event.target.value)}
                value={user}
                type="text"
                placeholder="Username"
                autoFocus
              />

          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="password">
            <Form.Label id="passlabel">Password</Form.Label>
              {" "}
              <Form.Control
                className="full-width"
                required
                name="userPassword"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />

          </Form.Group>

          <div className="btn-group">
            <Link className="btn-cancel" to="/">
              Cancel
            </Link>
            <Button type="submit" className="btn-login">
              Log In
            </Button>
            <Link className="btn-new-user" to="/newuser">
              New User
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
