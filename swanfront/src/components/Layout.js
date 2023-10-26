import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div>
      {(location.pathname === "/game" || location.pathname === "/about" || location.pathname === "/rpggame") && (
        <NavBar />
      )}
      {children}
      {(location.pathname === "/game" || location.pathname === "/about" || location.pathname === "/rpggame") && (
        <Footer />
      )}
    </div>
  );
}

export default Layout;
