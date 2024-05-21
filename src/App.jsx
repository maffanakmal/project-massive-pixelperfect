import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/NavbarComp";
import Footer from "./components/FooterComp";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileSetting from "./pages/ProfileSetting";

function App() {
  const location = useLocation();

  const hideNavbarFooterPaths = ["/login", "/register", "/profile", "/profileSetting"];

  // Check if current path is in the hideNavbarFooterPaths list
  const shouldHideNavbarFooter = hideNavbarFooterPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileSetting" element={<ProfileSetting />} />
      </Routes>

      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
