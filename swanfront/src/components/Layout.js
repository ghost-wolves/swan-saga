import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div>
      {(location.pathname === "/game" && <NavBar />) ||
        ("/about" && <NavBar />)}
      {children}
      {(location.pathname === "/game" && <Footer />) || ("/about" && <Footer />)}
    </div>
  );
}

export default Layout;
