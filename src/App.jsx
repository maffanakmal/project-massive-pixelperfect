import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileNav from "./components/ProfileNav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileSetting from "./pages/ProfileSetting";
import CatatanKeuangan from "./pages/CatatanKeuangan";

function App() {
  // const location = useLocation();
  // const hideNavbarLandingFooterPaths = ["/login", "/register", "/profile", "/profileSetting"];

  // const shouldHideNavbarLandingFooter = hideNavbarLandingFooterPaths.includes(location.pathname);

  return (
    <>
      {/* {!shouldHideNavbarLandingFooter && <Navbar />} */}
      
      {/* <ProfileNav/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileSetting" element={<ProfileSetting />} />
        <Route path="/catatankeuangan" element={<CatatanKeuangan />} />
      </Routes>

      {/* {!shouldHideNavbarLandingFooter && <Footer />} */}
    </>
  );
}

export default App;
