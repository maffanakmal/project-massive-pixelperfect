import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavbarComp";
import Footer from "./components/FooterComp";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileSetting from "./pages/ProfileSetting";

function App() {

  return (
    <>
        <Navbar />

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/profile" Component={Profile} />
          <Route path="/profileSetting" Component={ProfileSetting} />
        </Routes>

        <Footer/>
    </>
  );
}

export default App;
