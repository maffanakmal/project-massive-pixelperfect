import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavbarComp";
import Footer from "./components/FooterComp";

import Login from "./pages/Login";
import Register from "./pages/Login";
import Home from "./pages/Home";

function App() {

  return (
    <>
        <Navbar />

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>

        <Footer/>
    </>
  );
}

export default App;
