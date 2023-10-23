import { Button, Form, Alert } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/Login.css";
import { login } from "../services/authapi";
import AuthContext from "../context/AuthContext";

function Login() {
  //navigate stuff
  const navigate = useNavigate();

  //our states
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  //our contenxt for authentication
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
         {errors.map((error, i) => (
           <Alert variant="danger" key={i}>
             {" "}
             {/* Corrected 'variant' attribute */}
             {error}
           </Alert>
         ))}
         <Form onSubmit={handleSubmit}>
           <Form.Group className="mb-3" controlId="username">
             <Form.Label>Username</Form.Label>
             <Form.Control
               required
               name="userName"
               onChange={(event) => setUser(event.target.value)}
               value={user}
               type="text"
               placeholder="Username"
               autoFocus
             />
           </Form.Group>
           <Form.Group className="mb-3" controlId="password">
             <Form.Label>Password</Form.Label>
             <Form.Control
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
