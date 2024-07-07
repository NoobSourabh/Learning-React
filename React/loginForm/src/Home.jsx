import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome to Homepage</h1>
      <Link to="/login">
        <h2>Login</h2>
      </Link>
      <Link to="/signup">
        <h2>Sign up</h2>
      </Link>
    </>
  );
}

export default Home;
