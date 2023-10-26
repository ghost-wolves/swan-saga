import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useCallback, useContext, useEffect } from "react";

import logo from "./assets/photos/logo.png";
import NotFound from "./components/NotFound";
import Game from "./components/Game";
import RPGGame from "./components/RPGGame";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import NewUser from "./components/NewUser";
import Layout from "./components/Layout";
import AuthContext from "./context/AuthContext";
import { refreshToken } from "./services/authapi";



//set a timeout to refresh tokens
const TIMEOUT_MILLISECONDS = 14 * 16 * 1000;

// Define a variable for the localStorage token item key
const LOCAL_STORAGE_TOKEN_KEY = "swanToken";

function App() {

  const [user, setUser] = useState(null);
  // NEW: Define a state variable to track if
  // the restore login attempt has completed
  const [restoreLoginAttemptCompleted, setRestoreLoginAttemptCompleted] =
    useState(false);

  // NEW: Define a useEffect hook callback function to attempt
  // to restore the user's token from localStorage
  const resetUser = useCallback(() => {
    refreshToken()
      .then((user) => {
        setUser(user);
        setTimeout(resetUser, TIMEOUT_MILLISECONDS);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setRestoreLoginAttemptCompleted(true));
  }, []);

  useEffect(() => {
    resetUser();
  }, [resetUser]);


  const logout = () => {
    setUser(null);
    // NEW: remove the token from localStorage
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  };

  const auth = {
    user: user ? { ...user } : null,
    handleLoggedIn(user) {
      setUser(user);
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, user.token);
      setTimeout(resetUser, TIMEOUT_MILLISECONDS);
    },
    hasAuthority(authority) {
      return user?.authorities.includes(authority);
    },
    logout,
  };


  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/game" element={<Game />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/rpggame" element={<RPGGame />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
