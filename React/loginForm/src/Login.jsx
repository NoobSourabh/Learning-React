import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const passLogic = () => {
    setShowPass(!showPass);
  };

    const handleSubmit = () => {
        
      if (email && password) {
          console.log("Login Successfully");
          navigate('/');
      }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <div>
          <h2> Enter email</h2>
                  <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                  />
        </div>

        <div>
          <h2> Enter Password</h2>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={passLogic}>
            {showPass ? "Hide password" : "ShowPassword"}
          </button>
        </div>
        <button type="button" onClick={handleSubmit}>
          {" "}
          Login
        </button>
      </div>
    </>
  );
}
export default Login;
