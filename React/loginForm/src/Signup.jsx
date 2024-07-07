import React, { useState } from "react";

function Signup() {
  const [showPass, setShowpass] = useState(false);
  const passLogic = () => {
    setShowpass(!showPass);
  };
  const handleSubmit = () => {};
  return (
    <>
      <h1>Sign up</h1>
      <div>
        <h2>First name</h2>
        <input type="text" placeholder="First Name" />
        <h2>Last name</h2>
        <input type="text" placeholder="Last Name" />
        <h2>Email</h2>
        <input type="email" placeholder="Enter email" />
        <h2>Create Password</h2>
        <input
          type={showPass ? "text" : "password"}
          placeholder="Create Password"
        />
        <h2>Confirm Password</h2>
        <input
          type={showPass ? "text" : "password"}
          placeholder="Confirm Password"
        />
        <button type="button" onClick={passLogic}>
          Check password
        </button>
      </div>

      <button type="submit" onSubmit={handleSubmit}>
        Sign up
      </button>
    </>
  );
}

export default Signup;
