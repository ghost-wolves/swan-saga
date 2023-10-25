import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
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

  // If not loading and user is authenticated, display the game content
  return <div>{auth.user ? "Logged In" : "Not Logged In"}</div>;
}

export default Game;
