import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const LoggedIn = 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={LoggedIn ? (<Home />) : (<Login/>)} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
